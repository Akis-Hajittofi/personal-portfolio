import cors from "cors";
import express from "express";
import baseRoutes from "./routes/baseRoutes";
import homePageRoutes from "./routes/homePageRoutes"
import filesRoutes from "./routes/filesRoutes"

const app: express.Application = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/", baseRoutes);
app.use("/home", homePageRoutes)
app.use("/files", filesRoutes)

export default app;