import mongoose from "mongoose";

try {
  const Db = mongoose.connect(
    "mongodb+srv://MoleWeb:Ask23Mum%60sSon@cluster0.xwl0jz7.mongodb.net/bookStore"
  );
  console.log("Db connected sucessfully");
} catch (error) {
  console.log(error);
  console.log("Error in Db connection");
}
