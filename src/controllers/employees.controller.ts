import { Request, Response } from "express";
import { getAllEmployees } from "../services/employees.service";

export const getEmployees = async (req: Request, res: Response) => {
    try {
        const employees = await getAllEmployees();
        res.status(200).json(employees);
    } catch (error) {
        console.log(error)
        res.status(500).json({error: "Internal Server Error"})
    }
}