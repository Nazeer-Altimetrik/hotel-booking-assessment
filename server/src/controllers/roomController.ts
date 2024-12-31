import { Request, Response } from "express";
import { RoomDetailsType } from "../types/roomDetails";
import { readJSONFile } from "../utils/fileReader";
import { handleError } from "../utils/errorHandler";

const getRoomList = async (req: Request, res: Response): Promise<void> => {
    try {
      const rooms: RoomDetailsType[] = readJSONFile("rooms.json");
      const hotelID = req.params.hotel_id
      const availableRoom = rooms.find(
        (room) => room.hotelId === Number(hotelID)
      );

      res.status(200).json({
        success: true,
        data: availableRoom,
      });
    } catch (err: any) {
      handleError(res, err, "Get Room By ID");
    }
  };


export {getRoomList}
  