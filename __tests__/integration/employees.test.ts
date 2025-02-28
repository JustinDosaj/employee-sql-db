import request from "supertest";
import { app } from "../../src/server";


describe("Employees API", () => {
  describe("GET /api/employees", () => {
    it("should return 200 and a list of employees", async () => {
      const res = await request(app).get("/api/employees?limit=2");
      expect(res.status).toBe(200);
      expect(res.body).toBeInstanceOf(Array);
      expect(res.body.length).toBe(2);
    });

    it("should return 400 for invalid limit parameter", async () => {
      const res = await request(app).get("/api/employees?limit=invalid");
      expect(res.status).toBe(400);
      expect(res.body.error).toBeDefined();
    });
  });

  describe("GET /api/employees/:id", () => {
    it("should return a single employee", async () => {
      const res = await request(app).get("/api/employees/10001");
      expect(res.status).toBe(200);
      expect(res.body.emp_no).toBe(10001);
    });

    it("should return 404 for non-existing employee", async () => {
      const res = await request(app).get("/api/employees/99999");
      expect(res.status).toBe(404);
    });
  });
});
