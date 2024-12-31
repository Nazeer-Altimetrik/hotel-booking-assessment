import { Request, Response } from "express";
import { readJSONFile, writeJSONFile } from "../utils/fileReader";
import { HotelDetailsType } from "../types/hotelDetails";
import { handleError } from "../utils/errorHandler";

const getHotelsList = async (req: Request, res: Response): Promise<void> => {
  try {
    const hotels: HotelDetailsType[] = readJSONFile("hotels.json");
    const city = req.params.city_name?.toLowerCase() || "";
    const selectedCityHotels = hotels.filter(
      (hotel) => hotel.basicInfo.address.city.name?.toLocaleLowerCase() === city
    );
    res.status(200).json({
      success: true,
      data: selectedCityHotels,
    });
  } catch (err: any) {
    handleError(res, err, "Get Hotels By City");
  }
};

const getHotelDetail = async (req: Request, res: Response): Promise<void> => {
  try {
    const hotels: HotelDetailsType[] = readJSONFile("hotels.json");
    const hotelId = req.params.hotel_id;
    const selectedHotel = hotels.find(
      (hotel) => hotel.hotelId === Number(hotelId)
    );
    res.status(200).json({
      success: true,
      data: selectedHotel,
    });
  } catch (err: any) {
    handleError(res, err, "Get Hotel By ID");
  }
};



export { getHotelsList, getHotelDetail };
