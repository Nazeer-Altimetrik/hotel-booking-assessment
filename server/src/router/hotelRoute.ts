import { Router } from "express";
import { getHotelDetail, getHotelsList } from "../controllers/hotelController";

const router = Router();

router.get("/city/:city_name", getHotelsList);
router.get("/details/:hotel_id", getHotelDetail);

export default router;