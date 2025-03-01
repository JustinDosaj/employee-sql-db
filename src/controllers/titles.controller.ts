import { Request, Response } from "express"
import { getTitles } from "../services/titles.service";

export const TitlesController = async (req: Request, res: Response) => {

    const limit = parseInt(req.query.limit as string) || 10;
    // No filters
    // No Columns

    try { 
        const titles = await getTitles(limit)
        res.status(200).json({success: true, data: titles})
    } catch (error) {
        console.error(error)
        res.status(500).json({success: false, message: "Failed to retrieve titles."})
    }

}