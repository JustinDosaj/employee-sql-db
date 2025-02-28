import pool from "../db";

interface GetEmployeeProps {
    limit: number;
    columns: string[];
}

export const getAllEmployees= async ({limit, columns = []}: GetEmployeeProps) => {
    try {

        const allowedColumns = ["emp_no", "birth_date", "first_name", "last_name", "gender", "hire_date"];
        const selectedColumns = columns.length > 0 ? columns.filter(col => allowedColumns.includes(col)) : allowedColumns;
        
        // Construct dynamic query safely
        const query = `SELECT ${selectedColumns.join(", ")} FROM employees LIMIT ?`;
        const [rows] = await pool.query(query, [limit]);

        return rows;
    } catch (error) {
        throw new Error("Error fetching employees: " + error);
    }
}