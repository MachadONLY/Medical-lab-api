import { Request, Response } from "express";
import * as service from "../services/scoreService";

export const postScore = async (req: Request, res: Response) => {
  const { playerName, score, playTime } = req.body;
  const created = await service.createScore({ playerName, score, playTime });
  res.status(201).json(created);
};

export const listScores = async (_req: Request, res: Response) => {
  const list = await service.getAllScores();
  res.json(list);
};
