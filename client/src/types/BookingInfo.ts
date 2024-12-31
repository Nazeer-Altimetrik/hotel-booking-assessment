import { HotelDetailsType } from "./hotelDetails";
import { RoomInfo } from "./RoomDetails";


export type BookingDetails = { from: Date; to: Date; noOfRooms: number };

export type bookingDetails = {
  bookingId: number;
  hotelId: number;
  userId: 123;
  fromDate: Date;
  toDate: Date;
  noOfRooms: number;
  roomId: number;
};


type BookedRoom = {
  roomId: number;
  numberOfRooms: number;
  totalPrice: number;
  bookedFromDate: string;
  bookedToDate: string;
  isCancellable: boolean;
  canEdit: boolean;
  roomDetails: RoomInfo;
};

export type BookedDetail = {
  hotelId: number;
  bookedHotel: HotelDetailsType;
  bookedRooms: BookedRoom[];
};


