import { Router } from "express";
import { getDepartmentById } from "../controllers/departments.controller";

const router = Router();

router.get('/:id', getDepartmentById)

export default router