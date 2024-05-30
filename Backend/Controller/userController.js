import { userModel } from "../Model/userModel.js";

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
  const [first__name, last__name, email, password, phoneNumber] = req.body;
  if (!first__name || !last__name || !email || !password || !phoneNumber) {
    return res.status(400).json({ message: "All fields are required" });
  }
  try {
  } catch (error) {}

  res.json({ message: "create user" });
};

const updateUser = async (req, res) => {
  res.json({ message: "update user" });
};

const deleteUser = async (req, res) => {
  res.json({ message: "delete user" });
};

export { createUser, getUser, getUsers, updateUser, deleteUser };
