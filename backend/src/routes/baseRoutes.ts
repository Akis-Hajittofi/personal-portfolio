import { Router } from "express";

const router = Router();

router.get("/", (req, res) => {
  res.send("THE Express + TypeScript Server: PERSONAL PORTFOLIO");
});

export default router;
