import pool from "../db";

interface GetEmployeeProps {
    limit: number;
    columns?: string[];
    filters?: { [key: string]: string };
}

export const getAllEmployees = async ({ limit, columns = [], filters = {} }: GetEmployeeProps) => {

    let query = `SELECT ${columns.join(", ")} FROM employees`;
    let queryParams: any[] = [];

    try {
        // Build WHERE conditions dynamically
        // Return parameterized query
        const conditions = Object.keys(filters)
            .filter((key) => columns.includes(key)) // Ensure filter keys are valid
            .map((key) => {
                queryParams.push(filters[key]);
                return `${key} = ?`;
            });
        
        // Check conditions from filters and add to query statement
        // Statement Example : `WHERE <gender = M AND first_name = John ...>`
        if (conditions.length > 0) {
            query += ` WHERE ${conditions.join(" AND ")}`;
        }

        // Always add query to ensure there is a 10 max unless otherwise specified
        query += ` LIMIT ?`;
        queryParams.push(limit);

        // Query holds the final SQL query
        // queryParams holds the values to be inserted into the query
        const [rows] = await pool.query(query, queryParams);
        return rows;
        
    } catch (error) {
        console.error("Database query error:", error);
        throw new Error("Error fetching employees");
    }
};