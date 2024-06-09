import mongoose from "mongoose";

const contactSchema = new mongoose.Schema({
  userName: { type: String, required: true },
  email: { type: String, required: true },
  phoneNumber: { type: String, required: true },
  message: { type: String, required: true },
});

const contactModel = mongoose.model("contacts", contactSchema);

export { contactModel };
