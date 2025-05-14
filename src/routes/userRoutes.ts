// src/routes/userRoutes.ts
import { Router } from "express";
import { createUser, getUsers, loginUser } from "../controllers/userController";
const router = Router();

// Criação (com 409 em duplicata)
router.post("/users", createUser);

// Listagem / existência
// ex.: GET /api/users?email=foo@bar.com
router.get("/users", getUsers);

// Login (front faz POST /api/auth/login)
router.post("/auth/login", loginUser);

export default router;
