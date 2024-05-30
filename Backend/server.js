import express from "express";
import { bookRouter } from "./Routes/bookRouter.js";
import "./Model/Db.js";
import { userRouter } from "./Routes/userRouter.js";

const server = express();

server.use(express.json());
server.use("/api/books", bookRouter);
server.use("/api/users", userRouter);

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
