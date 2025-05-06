import { Router } from "express";
import { getHomePageInfo } from "../controllers/homePageControllers";

const router = Router();

router.get("/", getHomePageInfo)
export default router;