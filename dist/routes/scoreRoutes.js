"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// routes/scoreRoutes.ts
const express_1 = require("express");
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const router = (0, express_1.Router)();
// Cria um novo score, recebendo email do usuário
router.post("/scores", async (req, res) => {
    const { email, score, playTime } = req.body;
    if (!email || score == null || playTime == null) {
        return res.status(400).json({ message: "Faltam dados obrigatórios." });
    }
    // 1) Encontre o usuário pelo email
    const user = await prisma.user.findUnique({ where: { email } });
    if (!user) {
        return res.status(404).json({ message: "Usuário não encontrado." });
    }
    // 2) Crie o score vinculado ao user.id
    const newScore = await prisma.score.create({
        data: {
            score,
            playTime,
            userId: user.id
        },
        include: {
            user: true
        }
    });
    res.status(201).json(newScore);
});
// Busca todos os scores, incluindo dados do usuário
router.get("/scores", async (_req, res) => {
    const all = await prisma.score.findMany({
        include: { user: true },
        orderBy: { createdAt: "desc" }
    });
    res.json(all);
});
exports.default = router;
