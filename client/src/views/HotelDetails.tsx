import {
  Box,
  Container,
  ImageList,
  ImageListItem,
  Typography,
} from "@mui/material";
import { useParams } from "react-router";
import { useEffect, useState } from "react";
import { getHotelDetail } from "../service/hotelAPI";
import { HotelDetailsType } from "../types/hotelDetails";
import BookingSearchBar from "../components/HotelSearchbar";
import RoomDetails from "../components/RoomDetails";
import { RoomDetailsType } from "../types/RoomDetails";
import { getRoomsList } from "../service/roomAPI";

type Params = { hotelId: string };

function srcset(image: string, size: number, rows = 1, cols = 1) {
  return {
    src: `${image}?w=${size * cols}&h=${size * rows}&fit=crop&auto=format`,
    srcSet: `${image}?w=${size * cols}&h=${
      size * rows
    }&fit=crop&auto=format&dpr=2 2x`,
  };
}

const HotelDetails = () => {
  let { hotelId } = useParams<Params>();

  const [hotelDetail, setHotelDetail] = useState<HotelDetailsType>();
  const [roomDetails, setRoomsDetail] = useState<RoomDetailsType>();

  useEffect(() => {
    if (typeof hotelId === "string") {
      getHotelDetail(hotelId)
        .then((res) => {
          setHotelDetail(res.data);
          fetchRoomsDetails(hotelId);
        })
        .catch((err) => console.error(err));
    }
  }, [hotelId]);

  const fetchRoomsDetails = (hotelId: string) => {
    getRoomsList(hotelId)
      .then((res) => {
        setRoomsDetail(res.data);
      })
      .catch((err) => console.error(err));
  };

  return (
    <Container sx={{ paddingTop: "20px" }} data-testid="event-container">
      {hotelDetail && (
        <Box>
          <Box>
            <Typography variant="h3">
              {hotelDetail.basicInfo.hotelName}
            </Typography>
            <Typography variant="h5">
              {hotelDetail.basicInfo.address.area.name}
            </Typography>
          </Box>

          {hotelDetail.hotelFacilityImages && (
            <Box>
              <ImageList
                sx={{
                  width: 500,
                }}
                variant="quilted"
                cols={4}
                rowHeight={121}
              >
                {hotelDetail.hotelFacilityImages.map((item) => (
                  <ImageListItem key={item.id} cols={1} rows={1}>
                    <img
                      {...srcset(item.urls.value, 121)}
                      alt={item.category}
                      loading="lazy"
                    />
                  </ImageListItem>
                ))}
              </ImageList>
            </Box>
          )}

          <Box>
            <BookingSearchBar />
          </Box>
          {roomDetails && (
            <Box>
              <RoomDetails roomDetails={roomDetails} />
            </Box>
          )}
        </Box>
      )}
    </Container>
  );
};

export default HotelDetails;
