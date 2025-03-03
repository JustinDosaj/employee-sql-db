"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.TitlesController = void 0;
const titles_service_1 = require("../services/titles.service");
const TitlesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const limit = parseInt(req.query.limit) || 10;
    // No filters
    // No Columns
    try {
        const titles = yield (0, titles_service_1.getTitles)(limit);
        res.status(200).json({ success: true, data: titles });
    }
    catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Failed to retrieve titles." });
    }
});
exports.TitlesController = TitlesController;
