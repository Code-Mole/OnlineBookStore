import { bookModel } from "../Model/bookSchema.js";

const getBooks = async (req, res) => {
  try {
    const books = await bookModel.find();
    res.status(200).json(books);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};
const getBook = async (req, res) => {
  try {
    const book = await bookModel.findById(req.params.id);
    res.status(200).json(book);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};
const createBook = async (req, res) => {
  try {
    const { title, price, rating, image } = req.body;
    if (!title || !price || !rating || !image) {
      return res.status(400).json({ message: "Please fill all the fields" });
    }
    const book = await bookModel.create({ title, price, rating, image });
    res.status(200).json(book);
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};
const updateBook = async (req, res) => {
  try {
    const book = await bookModel.findById(req.params.id);
    if (!book) {
      res.status(404).json({ message: "Book not found" });
    }
    await bookModel.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.status(200).json({ message: "Book updated successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};
const deleteBook = async (req, res) => {
  try {
    const book = await bookModel.findById(req.params.id);
    if (!book) {
      res.status(404).json({ message: "Book not found" });
    }
    await bookModel.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Book deleted successfully" });
  } catch (err) {
    console.log(err);
    res.status(400).json({ message: err.message });
  }
};

export { getBooks, getBook, createBook, updateBook, deleteBook };
