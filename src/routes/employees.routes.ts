import { Router } from "express";
import { EmployeesController } from "../controllers/employees.controller";

const router = Router();

router.get('/employees', EmployeesController);

export default router