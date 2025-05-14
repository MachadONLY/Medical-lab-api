import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export const createScore = (data: {
  playerName: string;
  score: number;
  playTime: number;
}) => prisma.score.create({ data });

export const getAllScores = () =>
  prisma.score.findMany({ orderBy: { score: "desc" } });
