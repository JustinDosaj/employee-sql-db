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
Object.defineProperty(exports, "__esModule", { value: true });
exports.getEmployeeDepartmentHandler = exports.getEmployeeById = exports.getEmployees = void 0;
const employees_service_1 = require("../services/employees.service");
// Get Employee by filter 
const getEmployees = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allowedColumns = ["emp_no", "birth_date", "first_name", "last_name", "gender", "hire_date"];
    const allowedFilters = ["gender", "first_name", "last_name", "hire_date", "emp_no"];
    try {
        const limit = parseInt(req.query.limit) || 10;
        const reqColumns = req.query.columns ? req.query.columns.split(",") : [];
        const filters = {};
        const columns = reqColumns.length > 0 ? reqColumns.filter(col => allowedColumns.includes(col)) : allowedColumns;
        allowedFilters.forEach((filter) => {
            if (req.query[filter]) {
                filters[filter] = req.query[filter];
            }
        });
        const employees = yield (0, employees_service_1.fetchAllEmployees)({ limit, columns, filters });
        res.status(200).json({ success: true, data: employees });
    }
    catch (error) {
        console.error("Error fetching employees:", error);
        res.status(500).json({ success: false, message: "Error fetching employees" });
    }
});
exports.getEmployees = getEmployees;
// Get Employee by id with URI paramter /employee/:id
const getEmployeeById = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const id = parseInt(req.params.id);
        const employee = yield (0, employees_service_1.fetchEmployeeById)(id);
        res.status(200).json({ success: true, data: employee });
    }
    catch (error) {
        res.status(500).json({ success: false, message: "Failed to get employee by ID" });
    }
});
exports.getEmployeeById = getEmployeeById;
const getEmployeeDepartmentHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    // Query limit because it is after ?
    // Use params for id because it is in RESTful API path ("/:id")
    const limit = parseInt(req.query.limit) || 10;
    const id = parseInt(req.params.id);
    console.log(limit);
    console.log(id);
    try {
        const department = yield (0, employees_service_1.getEmployeeDepartment)(limit, id);
        res.status(200).json({ success: true, data: department });
    }
    catch (error) {
        res.status(500).json({ succes: false, message: "Error retrieving department by employee id" });
    }
});
exports.getEmployeeDepartmentHandler = getEmployeeDepartmentHandler;
