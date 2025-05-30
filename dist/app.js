"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// src/app.ts
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const scoreRoutes_1 = __importDefault(require("./routes/scoreRoutes"));
const userRoutes_1 = __importDefault(require("./routes/userRoutes"));
const app = (0, express_1.default)();
app.use((0, cors_1.default)());
app.use(express_1.default.json());
// monta: POST /api/users → createUser
app.use("/api", userRoutes_1.default);
// demais rotas
app.use("/api", scoreRoutes_1.default);
exports.default = app;
