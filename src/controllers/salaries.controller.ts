import { Request, Response } from "express";
import { getSalaries } from "../services/salaries.service";

export const SalariesController = async (req: Request, res: Response) => {

    const allowedColumns = ['emp_no', 'salary', 'from_date', 'to_date']; // Select columns to reduce the weight of the search
    const allowedFilters = allowedColumns; // Allowed filtes to improve search results

    try {
        const limit = parseInt(req.query.limit as string) || 10;
        const reqColumns = req.query.columns ? (req.query.columns as string).split(",") : []
        const filters: {[key: string]: string} = {}

        const columns = reqColumns.length > 0 ? reqColumns.filter(col => allowedColumns.includes(col)) : allowedColumns;

        allowedFilters.forEach((filter) => {
            if (req.query[filter]) {
                filters[filter] = req.query[filter] as string
            }
        })

        const salaries = await getSalaries({limit, columns, filters});       
        res.status(200).json({success: true, data: salaries}); // update data return val

    } catch (error) {
        console.error("Error fetching salaries: ", error);
        res.status(500).json({success: false, message: "Error fetching Salaries" });
    }
}