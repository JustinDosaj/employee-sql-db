"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const supertest_1 = __importDefault(require("supertest"));
const db_1 = __importDefault(require("../../src/db"));
const server_1 = require("../../src/server");
describe("Employees API", () => {
    afterAll(() => __awaiter(void 0, void 0, void 0, function* () {
        yield db_1.default.end(); // Close DB connection after tests
    }));
    test("GET /api/employees should return employees", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(server_1.app).get("/api/employees");
        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
        expect(Array.isArray(res.body.data)).toBe(true);
    }));
    test("GET /api/employees?limit=5 should return 5 employees", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(server_1.app).get("/api/employees?limit=5");
        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
        expect(res.body.data.length).toBe(5);
    }));
    test("GET /api/employees?columns=first_name,last_name should return only first_name and last_name", () => __awaiter(void 0, void 0, void 0, function* () {
        const res = yield (0, supertest_1.default)(server_1.app).get("/api/employees?columns=first_name,last_name");
        expect(res.status).toBe(200);
        expect(res.body.success).toBe(true);
        expect(res.body.data[0]).toHaveProperty("first_name");
        expect(res.body.data[0]).toHaveProperty("last_name");
        expect(res.body.data[0]).not.toHaveProperty("emp_no");
    }));
});
