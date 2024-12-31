import { configureStore } from "@reduxjs/toolkit";
import selectionDetailsReducer from "./selectionDetailsSlice";
import roomDetailsReducer from './roomDetailsSlice';

export const store = configureStore({
  reducer: {
    selectionDetails: selectionDetailsReducer,
    roomDetails: roomDetailsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
