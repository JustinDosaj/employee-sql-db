import pool from "../db"


export const getTitles = async(limit: number) => {

    let query = 'SELECT * FROM titles';
    let queryParams: any[] = []

    try {

        query += ` LIMIT ?`
        queryParams.push(limit)

        const [ rows ] = await pool.query(query, queryParams);
        return rows;

    } catch(error) {
        console.error("Database query error: ", error)
        throw new Error("Error fetching salaries");
    }
}