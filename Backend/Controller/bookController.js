const getBooks = async (req, res) => {
  res.send("books");
};
const getBook = async (req, res) => {
  res.send("book");
};
const createBook = async (req, res) => {
  res.send("create");
};
const updateBook = async (req, res) => {
  res.send("update");
};
const deleteBook = async (req, res) => {
  res.send("delete");
};

export { getBooks, getBook, createBook, updateBook, deleteBook };
