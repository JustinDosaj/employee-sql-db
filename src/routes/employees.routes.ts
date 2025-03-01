import { Router } from "express";
import { getEmployeeById, getEmployees } from "../controllers/employees.controller";

const router = Router();

router.get('/', getEmployees);
router.get('/:id', getEmployeeById)

export default router