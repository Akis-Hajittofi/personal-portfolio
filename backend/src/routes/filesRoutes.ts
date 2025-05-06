import { Router } from "express";
import { getCv } from "../controllers/filesControllers";

const router = Router();

router.get("/cv", getCv)

export default router;