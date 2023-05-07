import express from "express";
import rootRouter from "./routers/rootRouter";

const app = express();

app.set("view engine", "pug");
app.set("views", process.cwd() + "/src/views");
app.use("/", rootRouter);

const PORT = 4000;

app.listen(PORT, () => console.log(`✅ Server started: http://localhost:${PORT}`));