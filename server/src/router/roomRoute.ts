import { Router } from "express";
import { getRoomList } from "../controllers/roomController";


const router = Router();

router.get("/hotel/:hotel_id", getRoomList);

export default router;