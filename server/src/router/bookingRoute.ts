import { Router } from "express";
import {
  bookHotel,
  getBookedHotels,
} from "../controllers/bookingHotelController";

const router = Router();

router.post("/", bookHotel);
router.get("/", getBookedHotels);

export default router;
