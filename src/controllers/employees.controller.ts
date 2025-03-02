import { Request, Response } from "express";
import { fetchAllEmployees } from "../services/employees.service";
import { fetchEmployeeById } from "../services/employees.service";

// Get Employee by filter 
export const getEmployees = async (req: Request, res: Response) => {

    const allowedColumns = ["emp_no", "birth_date", "first_name", "last_name", "gender", "hire_date"];
    const allowedFilters = ["gender", "first_name", "last_name", "hire_date", "emp_no"];
    
    try {
        const limit = parseInt(req.query.limit as string) || 10;
        const reqColumns = req.query.columns ? (req.query.columns as string).split(",") : [];
        const filters: { [key: string]: string } = {};
                
        const columns = reqColumns.length > 0 ? reqColumns.filter(col => allowedColumns.includes(col)) : allowedColumns;

        allowedFilters.forEach((filter) => {
            if (req.query[filter]) {
                filters[filter] = req.query[filter] as string;
            }
        });

        const employees = await fetchAllEmployees({ limit, columns, filters });
        res.status(200).json({ success: true, data: employees });

    } catch (error) {
        console.error("Error fetching employees:", error);
        res.status(500).json({ success: false, message: "Error fetching employees" });
    }
};

// Get Employee by id with URI paramter /employee/:id
export const getEmployeeById = async (req: Request, res: Response) => {

    try {

        const id = parseInt(req.params.id as string)
        console.log(id)
        const employee = await fetchEmployeeById(id)

        res.status(200).json({success: true, data: employee})

    } catch (error) {
        res.status(500).json({success: false, message: "Failed to get employee by ID"})
    }


}
