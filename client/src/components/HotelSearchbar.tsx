import { useState } from "react";
import { Button, Box, Grid } from "@mui/material";
import RoomSelectionInfo from "./RoomSelectionInfo";
import DateRange from "./DateRange";
import { BookingDetails } from "../types/BookingInfo";
import { getRoomsList } from "../service/roomAPI";
import { useParams } from "react-router";
import { setRoomDetails } from "../state/roomDetailsSlice";
import { useDispatch } from "react-redux";

type Params = { hotelId: string };

const BookingSearchBar = () => {
  const dispatch = useDispatch();

  let { hotelId } = useParams<Params>();

  const [bookingDetails, setBookingDetails] = useState<BookingDetails>({
    from: new Date(),
    to: new Date(),
    noOfRooms: 1,
  });

  const onChangeHandler = (
    type: keyof BookingDetails,
    value: Date | number
  ) => {
    setBookingDetails((prev) => ({ ...prev, [type]: value }));
  };


  const updateAvailableRooms = () => {
    if(hotelId){
      getRoomsList(hotelId)
        .then((res) => {
          dispatch(setRoomDetails(res.data));
        })
        .catch((err) => console.error(err));
    }
  }

  return (
    <Box sx={{ flexGrow: 1, p: 2 }}>
      <Grid container spacing={2} alignItems="center">
        <Grid item md={5}>
          <DateRange
            onChangeHandler={onChangeHandler}
          />
        </Grid>
        <Grid item md={5}>
          <RoomSelectionInfo
            onChangeHandler={onChangeHandler}
            selectionDetails={bookingDetails}
          />
        </Grid>
        <Grid item md={2}>
          <Button variant="contained" onClick={updateAvailableRooms}>Search</Button>
        </Grid>
      </Grid>
    </Box>
  );
};

export default BookingSearchBar;
