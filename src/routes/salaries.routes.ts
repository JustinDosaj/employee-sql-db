import { Router } from "express";
import { SalariesController } from "../controllers/salaries.controller";

const router = Router();

router.get('/salaries', SalariesController)

export default router