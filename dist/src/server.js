"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.app = void 0;
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const dotenv_1 = __importDefault(require("dotenv"));
require("./db");
const employees_routes_1 = __importDefault(require("./routes/employees.routes"));
const salaries_routes_1 = __importDefault(require("./routes/salaries.routes"));
const titles_routes_1 = __importDefault(require("./routes/titles.routes"));
dotenv_1.default.config();
exports.app = (0, express_1.default)();
exports.app.use(express_1.default.json());
exports.app.use((0, cors_1.default)());
exports.app.use(express_1.default.urlencoded({ extended: true }));
const PORT = process.env.SERVER_PORT || 5000;
exports.app.get('/', (req, res) => {
    res.send("Backend is running!");
});
exports.app.use('/employees', employees_routes_1.default);
exports.app.use('/salaries', salaries_routes_1.default);
exports.app.use('/titles', titles_routes_1.default);
exports.app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
