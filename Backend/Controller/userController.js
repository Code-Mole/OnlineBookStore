import { userModel } from "../Model/userModel.js";
import bcrypt from "bcrypt";

const getUsers = async (req, res) => {
  try {
    const user = await userModel.find();
    res.status(200).json(user);
  } catch (error) {
    console.log({ message: error.message });
    res.status(500).json({ message: "Internal Server Error" });
  }
};

const getUser = async (req, res) => {
  try {
    const user = await userModel.findById(req.params.id);
    res.status(200).json(user);
  } catch (error) {
    console.log({ message: error.message });
    res.status(404).json({ message: "user not found" });
  }
};

const createUser = async (req, res) => {
  try {
    const { first__name, last__name, email, password } = req.body;
    if (!first__name || !last__name || !email || !password) {
      return res.status(400).json({ message: "All fields are required" });
    }
    const hashPassword = await bcrypt.hash(password, 10);
    console.log(hashPassword);

    const user = await userModel.create({
      first__name,
      last__name,
      email,
      password: hashPassword,
    });
    res.status(200).json({ message: "user created", user });
  } catch (error) {
    console.log({ message: error.message });
    return res.status(400).json({ message: "Invalid data" });
  }
};

const updateUser = async (req, res) => {
  // res.json({ message: "update user" });
  const user = await userModel.findById(req.params.id);
  if (!user) {
    return res.status(404).json({ message: "user not found" });
  }
  try {
    const user = await userModel.findByIdAndUpdate(req.params.id, req.body);
    return res.status(201).json({ message: "user updated", user });
  } catch (error) {
    return res.status(400).json({ message: error.message });
    console.log(error);
  }
};

const deleteUser = async (req, res) => {
  // res.json({ message: "delete user" });
  // const user = await userModel.findById(req.params.id);
  // if (!user) {
  //   res.status(404).json({ message: "user not found" });
  // }
  try {
    const user = await userModel.findByIdAndDelete(req.params.id);
    res.json({ message: "user deleted" }, user);
  } catch (err) {
    res.json({ message: err.message });
    console.log(err);
  }
};

export { createUser, getUser, getUsers, updateUser, deleteUser };
