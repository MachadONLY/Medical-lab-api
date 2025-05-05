"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getAllScores = exports.createScore = void 0;
const client_1 = require("@prisma/client");
const prisma = new client_1.PrismaClient();
const createScore = (data) => prisma.score.create({ data });
exports.createScore = createScore;
const getAllScores = () => prisma.score.findMany({ orderBy: { score: "desc" } });
exports.getAllScores = getAllScores;
