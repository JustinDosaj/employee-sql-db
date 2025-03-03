"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const titles_controller_1 = require("../controllers/titles.controller");
const router = (0, express_1.Router)();
router.get('/titles', titles_controller_1.TitlesController);
exports.default = router;
