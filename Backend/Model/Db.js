import mongoose from "mongoose";

try {
  await mongoose.connect(
    "mongodb+srv://MoleWeb:Ask23Mum%60sSon@cluster0.xwl0jz7.mongodb.net/bookStore"
  );
  console.log("Db connected sucessfully");
} catch (error) {
  console.log(error, "Error in Db connection");
}
