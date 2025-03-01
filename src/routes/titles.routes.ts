import { Router } from "express";
import { TitlesController } from "../controllers/titles.controller";

const router = Router();

router.get('/titles', TitlesController)

export default router