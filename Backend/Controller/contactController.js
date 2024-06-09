import { contactModel } from "../Model/contactModel.js";

const getcontacts = async (req, res) => {
  //   res.send("contacts");
  try {
    const contact = await contactModel.find();
    res.status(200).json({ message: "success", contact });
  } catch (err) {
    console.log(err);
    res.send("An error occurred");
  }
};

const getcontact = async (req, res) => {
  //   res.send(`get with ${req.params.id}`);
  try {
    const contact = await contactModel.findById(req.params.id);
    res.status(201).json({ message: "success", contact });
  } catch (err) {
    console.log(err);
    res.send("An error occurred");
  }
};

const createcontact = async (req, res) => {
  //   res.send("createcontact");
  try {
    const { userName, email, phoneNumber, message } = req.body;
    if (!userName || !email || !phoneNumber || !message) {
      res.send("All fields are requierd");
    }
    await contactModel.create({
      userName,
      email,
      phoneNumber,
      message,
    });
    res.status(201).json({ message: "sent succeful" });
  } catch (err) {
    console.log(err);
    res.send("An error occurred while submiting the message");
  }
};

const updatecontact = async (req, res) => {
  //   res.send(`update with ${req.params.id}`);
  try {
    const contact = await contactModel.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    );
  } catch (err) {
    console.log(err);
    res.send("An error occurred while trying to update the message");
  }
};

const deletecontact = async (req, res) => {
  res.send(`delete with ${req.params.id}`);
};

export { getcontacts, getcontact, createcontact, updatecontact, deletecontact };
