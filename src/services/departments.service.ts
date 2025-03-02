import pool from "../db"

export const fetchDepartmentById = async (limit: number, id: number) => {

    let query = `SELECT * FROM departments WHERE emp_no = ? LIMIT ?
    `

    let queryParams: any[] = []
    queryParams.push(id)
    queryParams.push(limit)

    const [rows] = await pool.query(query, queryParams)
    return rows
}