import express from "express";
import {
  createUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser,
  logUser,
} from "../Controller/userController.js";

const userRouter = express.Router();

userRouter.get("/", getUsers);

userRouter.get("/:id", getUser);

userRouter.post("/", createUser);

userRouter.post("/login", logUser);

userRouter.put("/:id", updateUser);

userRouter.delete("/:id", deleteUser);

export { userRouter };
