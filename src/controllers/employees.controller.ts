import { Request, Response } from "express";
import { getAllEmployees } from "../services/employees.service";

export const getEmployees = async (req: Request, res: Response) => {
    try {
        const limit = parseInt(req.query.limit as string) || 10;
        const reqColumns = req.query.columns ? (req.query.columns as string).split(",") : [];
        
        const allowedColumns = ["emp_no", "birth_date", "first_name", "last_name", "gender", "hire_date"];
        const columns = reqColumns.length > 0 ? reqColumns.filter(col => allowedColumns.includes(col)) : allowedColumns;

        // Extract filters dynamically
        const allowedFilters = ["gender", "first_name", "last_name", "hire_date"];
        const filters: { [key: string]: string } = {};

        allowedFilters.forEach((filter) => {
            if (req.query[filter]) {
                filters[filter] = req.query[filter] as string;
            }
        });

        const employees = await getAllEmployees({ limit, columns, filters });
        res.status(200).json({ success: true, data: employees });

    } catch (error) {
        console.error("Error fetching employees:", error);
        res.status(500).json({ success: false, message: "Error fetching employees" });
    }
};
