import { Request, Response } from "express";
import pool from "../db";
import { RowDataPacket } from "mysql2";

export const getHomePageInfo = async (req: Request, res: Response) => {
    try {
      const [rows] = await pool.query<RowDataPacket[]>(`
        SELECT
          id,
          banner_description AS bannerDescription,
          about_info AS aboutInfo
        FROM HomePage`);
      res.json(rows[0]);
    } catch (error) {
      console.error("Database error:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };