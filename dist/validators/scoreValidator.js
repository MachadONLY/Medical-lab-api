"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.createScoreRules = void 0;
const express_validator_1 = require("express-validator");
const createScoreRules = () => [
    (0, express_validator_1.body)("playerName").isString().notEmpty(),
    (0, express_validator_1.body)("score").isInt({ min: 0 }),
    (0, express_validator_1.body)("playTime").isInt({ min: 0 }),
];
exports.createScoreRules = createScoreRules;
