import express from "express";
import globalRouter from "./globalRouter";

const rootRouter = express.Router();

rootRouter.use("/", globalRouter);

export default rootRouter;
