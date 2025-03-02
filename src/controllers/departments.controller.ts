import { Request, Response } from "express";
import { fetchDepartmentById } from "../services/departments.service";

export const getDepartmentById = async(req: Request, res: Response) => {

    const limit = parseInt(req.query.limit as string) || 10
    const id = parseInt(req.query.id as string)

    try {

        const department = await fetchDepartmentById(limit, id)
        res.status(200).json({success: true, data: department})
    } catch (error) {

        res.status(500).json({succes: false, message: "Error retrieving department by employee id"})
    }
}