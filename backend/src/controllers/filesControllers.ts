import { Request, Response } from "express";
import { getPresignedUrl } from "../awsS3";

export const getCv = async (req: Request, res: Response) => {
    const bucketName = 'phanakis-personal-portfolio';
    const key = 'Phanakis Hajittofi CV.pdf';

    try {
        const presignedUrl = getPresignedUrl(bucketName, key, 900);
        res.status(200).json({ url: presignedUrl });
    } catch (error) {
        res.status(500).json({ error: `Failed to fetch CV: ${error}` });
    }
};