import { Router } from "express";
import cityRoute from "./cityRoute";
import hotelRoute from "./hotelRoute";
import roomRoute from "./roomRoute";
import bookingRoute from "./bookingRoute";

const router = Router();

router.use("/city", cityRoute);
router.use('/hotel-list',hotelRoute)
router.use('/rooms-list',roomRoute)
router.use('/book-hotel',bookingRoute)

export default router;