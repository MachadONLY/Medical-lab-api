// src/controllers/userController.ts
import { Request, Response } from "express";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// POST /api/users → criação protegida contra duplicata
export async function createUser(req: Request, res: Response) {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ message: "Nome e email são obrigatórios" });
  }

  try {
    const existing = await prisma.user.findUnique({ where: { email }, select: { id: true } });
    if (existing) {
      return res.status(409).json({ message: "Já existe uma conta com esse e-mail." });
    }
    const user = await prisma.user.create({
      data: { name, email },
      select: { id: true, name: true, email: true, createdAt: true },
    });
    return res.status(201).json({ user });
  } catch (err) {
    console.error("Erro createUser:", err);
    return res.status(500).json({ message: "Erro interno" });
  }
}

// GET /api/users?email=xxx → checa existência
export async function getUsers(req: Request, res: Response) {
  const emailQ = String(req.query.email || "");
  try {
    if (emailQ) {
      const user = await prisma.user.findUnique({
        where: { email: emailQ },
        select: { id: true, name: true, email: true, createdAt: true },
      });
      if (!user) {
        return res.status(404).json({ message: "Não encontrado" });
      }
      return res.json({ user });
    }
    // sem query, retorna todos
    const users = await prisma.user.findMany({
      select: { id: true, name: true, email: true, createdAt: true },
    });
    return res.json(users);
  } catch (err) {
    console.error("Erro getUsers:", err);
    return res.status(500).json({ message: "Erro interno" });
  }
}

// POST /api/auth/login → login simples (sem senha)
export async function loginUser(req: Request, res: Response) {
  const { email } = req.body;
  if (!email) {
    return res.status(400).json({ message: "Email é obrigatório" });
  }
  try {
    const user = await prisma.user.findUnique({
      where: { email },
      select: { id: true, name: true, email: true, createdAt: true },
    });
    if (!user) {
      return res.status(404).json({ message: "Nenhuma conta encontrada com esse e-mail." });
    }
    return res.json({ user });
  } catch (err) {
    console.error("Erro loginUser:", err);
    return res.status(500).json({ message: "Erro interno" });
  }
}
