import pool from "../db";

interface SalariesProps {
    limit: number,
    columns?: string[],
    filters?: {[key: string]: string}
}

export const getSalaries = async ({limit, columns = [], filters = {}}: SalariesProps) => {

    let query = `SELECT ${columns.join(",")} FROM salaries`
    let queryParams:any[] = []

    try {
        const conditions = Object.keys(filters)
            .filter((key) => columns.includes(key))
            .map((key) => {
                queryParams.push(filters[key]);
                return `${key} = ?`;
            })

        if (conditions.length > 0) {
            query += ` WHERE ${conditions.join(" AND ")}`
        }

        query += ` LIMIT ?`
        queryParams.push(limit)

        const [rows] = await pool.query(query, queryParams)
        return rows

    } catch (error) {
        console.error("Database query error:", error);
        throw new Error("Error fetching salaries");
    }

}