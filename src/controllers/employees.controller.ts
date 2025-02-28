import { Request, Response } from "express";
import { getAllEmployees } from "../services/employees.service";

export const getEmployees = async (req: Request, res: Response) => {
    try {

        const limit = parseInt(req.query.limit as string) || 10;
        const columns = req.query.columns ? (req.query.columns as string).split(",") : [];


        const employees = await getAllEmployees({limit, columns});
        res.status(200).json({ success: true, data: employees });

    } catch (error) {
        console.log(error)
        res.status(500).json({success: false, message: "Error fetching employee"});
    }
}