"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// src/routes/userRoutes.ts
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const router = (0, express_1.Router)();
// Criação (com 409 em duplicata)
router.post("/users", userController_1.createUser);
// Listagem / existência
// ex.: GET /api/users?email=foo@bar.com
router.get("/users", userController_1.getUsers);
// Login (front faz POST /api/auth/login)
router.post("/auth/login", userController_1.loginUser);
exports.default = router;
