"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const employees_controller_1 = require("../controllers/employees.controller");
const router = (0, express_1.Router)();
// Get All -- filterable
router.get('/', employees_controller_1.getEmployees);
// Get employee department with ID
router.get('/:id/departments', employees_controller_1.getEmployeeDepartmentHandler);
// Get employee with ID
router.get('/:id', employees_controller_1.getEmployeeById);
// Add new employee
router.post('/');
// Delete employee with ID
router.delete('/:id');
exports.default = router;
