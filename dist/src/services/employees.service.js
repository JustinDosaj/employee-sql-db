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
exports.getEmployeeDepartment = exports.fetchEmployeeById = exports.fetchAllEmployees = void 0;
const db_1 = __importDefault(require("../db"));
const fetchAllEmployees = (_a) => __awaiter(void 0, [_a], void 0, function* ({ limit, columns = [], filters = {} }) {
    let query = `SELECT ${columns.join(", ")} FROM employees`;
    let queryParams = [];
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
        const [rows] = yield db_1.default.query(query, queryParams);
        return rows;
    }
    catch (error) {
        console.error("Database query error:", error);
        throw new Error("Error fetching employees");
    }
});
exports.fetchAllEmployees = fetchAllEmployees;
const fetchEmployeeById = (id) => __awaiter(void 0, void 0, void 0, function* () {
    let queryParam = [];
    let query = `SELECT * FROM employees WHERE emp_no = ?`;
    queryParam.push(id);
    const [rows] = yield db_1.default.query(query, queryParam);
    return rows;
});
exports.fetchEmployeeById = fetchEmployeeById;
const getEmployeeDepartment = (limit, id) => __awaiter(void 0, void 0, void 0, function* () {
    let query = `SELECT * FROM dept_emp WHERE emp_no = ? LIMIT ?`;
    let queryParams = [];
    queryParams.push(id);
    queryParamspush(limit);
    const [rows] = yield db_1.default.query(query, queryParams);
    return rows;
});
exports.getEmployeeDepartment = getEmployeeDepartment;
