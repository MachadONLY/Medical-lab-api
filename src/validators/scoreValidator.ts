import { body, ValidationChain } from "express-validator";

export const createScoreRules = (): ValidationChain[] => [
  body("playerName").isString().notEmpty(),
  body("score").isInt({ min: 0 }),
  body("playTime").isInt({ min: 0 }),
];
