import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { BookingDetails } from "../types/BookingInfo";

const initialState: BookingDetails = {
  from: new Date(),
  to: new Date(),
  noOfRooms: 1,
};

const selectionDetailsSlice = createSlice({
  name: "selectionDetails",
  initialState,
  reducers: {
    updateBookingDetail(
      state,
      action: PayloadAction<{
        type: keyof BookingDetails;
        value: Date | number;
      }>
    ) {
      const { type, value } = action.payload;
      if (type === "from" || type === "to") {
        state[type] = value as Date;
      } else if (type === "noOfRooms") {
        state[type] = value as number;
      }
    },
  },
});

export const { updateBookingDetail } = selectionDetailsSlice.actions;

export default selectionDetailsSlice.reducer;
