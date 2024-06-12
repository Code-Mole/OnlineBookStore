import express from "express";
import cors from "cors";
import { bookRouter } from "./Routes/bookRouter.js";
import "./Model/Db.js";
import { userRouter } from "./Routes/userRouter.js";
import { contactRouter } from "./Routes/contactRouter.js";

const server = express();
server.set("view engine ", "ejs");
server.use(cors());
server.use(express.json());
server.use("/api/books", bookRouter);
server.use("/api/users", userRouter);
server.use("/api/contacts", contactRouter);

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
