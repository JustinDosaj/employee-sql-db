"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const salaries_controller_1 = require("../controllers/salaries.controller");
const router = (0, express_1.Router)();
router.get('/salaries', salaries_controller_1.SalariesController);
exports.default = router;
