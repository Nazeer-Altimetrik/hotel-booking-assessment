import { Request, Response } from "express";
import { readJSONFile, writeJSONFile } from "../utils/fileReader";
import { handleError } from "../utils/errorHandler";

const bookHotel = async (req: Request, res: Response): Promise<void> => {
  try {
    const bookings = readJSONFile("bookings.json");
    const newBooking = {
      bookingId: bookings.length
        ? bookings[bookings.length - 1].bookingId + 1
        : 1,
      ...req.body,
    };

    bookings.push(newBooking);
    writeJSONFile("bookings.json", bookings);

    res.status(201).json({
      success: true,
      data: newBooking,
    });
  } catch (err: unknown) {
    handleError(res, err, "Book Hotel By ID");
  }
};

const getBookedHotels = async (req: Request, res: Response): Promise<void> => {
  try {
    const city = readJSONFile("bookings.json");

    res.status(200).json({
      success: true,
      data: city,
    });
  } catch (err: any) {
    handleError(res, err, "Get booking list");
  }
};

export { bookHotel, getBookedHotels };
