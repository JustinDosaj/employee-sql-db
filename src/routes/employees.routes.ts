import { Router } from 'express';
import { getEmployees } from '../controllers/employees.controller';

const router = Router();

router.get('/employees', getEmployees);

export default router