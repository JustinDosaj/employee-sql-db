import { Router } from "express";
import { getEmployeeById, getEmployees, getEmployeeDepartmentHandler } from "../controllers/employees.controller";

const router = Router();

// Get All -- filterable
router.get('/', getEmployees);

// Get employee department with ID
router.get('/:id/departments', getEmployeeDepartmentHandler)

// Get employee with ID
router.get('/:id', getEmployeeById)

// Add new employee
router.post('/')

// Delete employee with ID
router.delete('/:id')

export default router