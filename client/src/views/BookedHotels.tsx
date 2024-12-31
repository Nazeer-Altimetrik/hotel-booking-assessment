import { Box, Button, Grid, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { fetchBookedHotels } from "../service/hotelAPI";
import { BookedDetail } from "../types/BookingInfo";

const BookedHotels = () => {
  const [bookedHotels, setBookedHotels] = useState<BookedDetail[]>();

  useEffect(() => {
    fetchBookedHotels()
      .then((res) => {
        setBookedHotels(res.data.bookedDetails);
      })
      .catch((err) => console.error(err));
  }, []);
  

  return (
    <Box sx={{ p: 3 }}>
      { bookedHotels && bookedHotels.map((hotelInfo) => (
        <Box key={hotelInfo.hotelId}>
          <Box>
            <Typography variant="h3">
              {hotelInfo.bookedHotel.basicInfo.hotelName}
            </Typography>
            <Typography variant="h5">
              {hotelInfo.bookedHotel.basicInfo.address.area.name}
            </Typography>
          </Box>
          {hotelInfo.bookedRooms.map((roomInfo) => (
            <Grid
              container
              item
              xs={12}
              sx={{ border: "2px solid white", pb: 2 }}
              key={roomInfo.roomId}
            >
              <Grid item xs={12}>
                <Typography variant="h4">
                  {roomInfo.roomDetails.title}
                </Typography>
              </Grid>
              <Grid item xs={3}></Grid>
              <Grid item xs={3}>
                {roomInfo.roomDetails.roomFacililites.map((facility) => (
                  <Typography key={facility.id} variant="h6">
                    {facility.title}
                  </Typography>
                ))}
              </Grid>
              <Grid item xs={3}>
                {`Price: ${roomInfo.totalPrice}`}
              </Grid>
              <Grid item xs={3}>
                <Link
                  to={`/hotel-detail/${hotelInfo.hotelId}`}
                  state={{
                    isEdit: true,
                    roomInfo: roomInfo,
                    hotelInfo: hotelInfo,
                  }}
                >
                  <Button>Edit</Button>
                </Link>
                <Button>Cancel</Button>
              </Grid>
            </Grid>
          ))}
        </Box>
      ))}
    </Box>
  );
};

export default BookedHotels;
