import { Router } from "express";
import { getCityList } from "../controllers/cityController";

const router = Router();

router.get("/", getCityList);

export default router;