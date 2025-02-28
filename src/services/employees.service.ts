import pool from "../db";

export const getAllEmployees = async () => {
    try {
        const [rows] = await pool.query("SELECT * FROM employees LIMIT 2");
        return rows;
    } catch (error) {
        throw new Error("Error fetching employees: " + error);
    }
}