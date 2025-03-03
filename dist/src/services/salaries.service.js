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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getSalaries = void 0;
const db_1 = __importDefault(require("../db"));
const getSalaries = (_a) => __awaiter(void 0, [_a], void 0, function* ({ limit, columns = [], filters = {} }) {
    let query = `SELECT ${columns.join(",")} FROM salaries`;
    let queryParams = [];
    try {
        const conditions = Object.keys(filters)
            .filter((key) => columns.includes(key))
            .map((key) => {
            queryParams.push(filters[key]);
            return `${key} = ?`;
        });
        if (conditions.length > 0) {
            query += ` WHERE ${conditions.join(" AND ")}`;
        }
        query += ` LIMIT ?`;
        queryParams.push(limit);
        const [rows] = yield db_1.default.query(query, queryParams);
        return rows;
    }
    catch (error) {
        console.error("Database query error:", error);
        throw new Error("Error fetching salaries");
    }
});
exports.getSalaries = getSalaries;
