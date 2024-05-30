import mongoose from "mongoose";

const userSchema = mongoose.Schema({
  first__name: {
    type: String,
    required: [true, "First name is required"],
  },
  last__name: {
    type: String,
    required: [true, "last name is required"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    unique: true,
  },
  password: {
    type: String,
    required: [true, "Password is required"],
    minlength: [6, "Password must be at least 6 characters long"],
  },
});

const userModel = mongoose.model("users", userSchema);

export { userModel };
