// src/app.ts
import express from "express";
import cors    from "cors";

import scoreRoutes from "./routes/scoreRoutes";
import userRoutes  from "./routes/userRoutes";

const app = express();

app.use(cors());
app.use(express.json());

// monta: POST /api/users → createUser
app.use("/api", userRoutes);

// demais rotas
app.use("/api", scoreRoutes);

export default app;
