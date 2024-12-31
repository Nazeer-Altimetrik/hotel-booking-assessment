type RoomFacility = {
  id: number;
  title: string;
};

type RoomImage = {
  key: string;
  value: string;
};

type Price = {
  perRoom: number;
};

export type RoomInfo = {
  roomId: number;
  title: string;
  price: Price;
  availableDate: Date | null;
  roomFacililites: RoomFacility[];
  roomImages: RoomImage[];
};

export type RoomDetailsType = {
  hotelId?: number;
  roomInfo: RoomInfo[];
};
