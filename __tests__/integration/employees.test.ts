import request from "supertest";
import pool from "../../src/db";
import { app } from "../../src/server";

describe("Employees API", () => {
  afterAll(async () => {
    await pool.end(); // Close DB connection after tests
  });

  test("GET /api/employees should return employees", async () => {
    const res = await request(app).get("/api/employees");
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(Array.isArray(res.body.data)).toBe(true);
  });

  test("GET /api/employees?limit=5 should return 5 employees", async () => {
    const res = await request(app).get("/api/employees?limit=5");
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.length).toBe(5);
  });

  test("GET /api/employees?columns=first_name,last_name should return only first_name and last_name", async () => {
    const res = await request(app).get("/api/employees?columns=first_name,last_name");
    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data[0]).toHaveProperty("first_name");
    expect(res.body.data[0]).toHaveProperty("last_name");
    expect(res.body.data[0]).not.toHaveProperty("emp_no");
  });
});
