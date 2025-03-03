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
exports.SalariesController = void 0;
const salaries_service_1 = require("../services/salaries.service");
const SalariesController = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const allowedColumns = ['emp_no', 'salary', 'from_date', 'to_date']; // Select columns to reduce the weight of the search
    const allowedFilters = allowedColumns; // Allowed filtes to improve search results
    try {
        const limit = parseInt(req.query.limit) || 10;
        const reqColumns = req.query.columns ? req.query.columns.split(",") : [];
        const filters = {};
        const columns = reqColumns.length > 0 ? reqColumns.filter(col => allowedColumns.includes(col)) : allowedColumns;
        allowedFilters.forEach((filter) => {
            if (req.query[filter]) {
                filters[filter] = req.query[filter];
            }
        });
        const salaries = yield (0, salaries_service_1.getSalaries)({ limit, columns, filters });
        res.status(200).json({ success: true, data: salaries }); // update data return val
    }
    catch (error) {
        console.error("Error fetching salaries: ", error);
        res.status(500).json({ success: false, message: "Error fetching Salaries" });
    }
});
exports.SalariesController = SalariesController;
