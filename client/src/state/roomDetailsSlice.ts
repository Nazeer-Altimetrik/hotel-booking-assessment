import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RoomDetailsType } from "../types/RoomDetails";

type RoomDetailsState = { hotels: RoomDetailsType[] };
const initialState: RoomDetailsState = { hotels: [] };

const roomDetailsSlice = createSlice({
  name: "roomDetails",
  initialState,
  reducers: {
    setRoomDetails(state, action: PayloadAction<RoomDetailsType[]>) {
      state.hotels = action.payload;
    },
  },
});

export const { setRoomDetails } = roomDetailsSlice.actions;

export default roomDetailsSlice.reducer;
