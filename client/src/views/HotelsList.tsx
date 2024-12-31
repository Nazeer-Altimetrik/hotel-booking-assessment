import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";
import HotelCard from "../components/HotelCard";
import { getCityList, getHotelsList } from "../service/hotelAPI.ts";
import { HotelDetailsType } from "../types/hotelDetails.js";
import { City } from "../types/city.ts";

const HotelsList = () => {
  const [cities, setCities] = useState([]);
  const [selectedCity, setSelectedCity] = useState("");
  const [availableHotels, setAvailableHotels] =
    useState<HotelDetailsType[]>();

  const handleChange = (e: SelectChangeEvent<string>) => {
    setSelectedCity(e.target.value);
  };

  const fetchHotels = (city: string) => {
    getHotelsList(city)
      .then((res: { data: HotelDetailsType[] }) => {
        if (res.data?.length) setAvailableHotels(res.data);
        else setAvailableHotels([]);
      })
      .catch((err) => console.error(err));
  };
  

  useEffect(() => {
    getCityList()
      .then((res) => {
        setCities(res.data);
        setSelectedCity(res.data[0].city)
        // dispatch(updateAvailableCity(res.data));
      })
      .catch((err) => console.error(err));
  }, []);

  useEffect(() => {
    if (selectedCity) {
      fetchHotels(selectedCity);
    }
  }, [selectedCity]);

  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      padding={"10px"}
      sx={{ maxWidth: "100vw", overflow: "hidden" }}
      data-testid="event-list-wrapper"
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          gap: "10px",
          alignItems: "center",
          marginLeft:'10px'
        }}
      >
        <Typography variant="h5">Book Hotels in</Typography>
        <FormControl variant="standard" sx={{ m: 1, minWidth: "100px" }}>
          <Select
            value={selectedCity}
            onChange={handleChange}
            placeholder="Select location"
          >
            {cities?.map((city : City) => (
              <MenuItem value={city.city} key={city.city}>
                {city.city}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>

      {availableHotels && (
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box>
            <Typography variant="h4">
              {` Top Hotels in ${selectedCity}`}
            </Typography>
          </Box>
          <Box sx={{ display: "flex", flexWrap: "wrap" }}>
            {availableHotels?.map((hotelInfo) => (
              <HotelCard hotelInfo={hotelInfo} key={hotelInfo.hotelId} />
            ))}
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default HotelsList;
