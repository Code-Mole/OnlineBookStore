import express from "express";

const bookRouter = express.Router();

bookRouter.get("/", getBooks);
bookRouter.get("/:id", getBook);
bookRouter.get("/", createBook);
bookRouter.get("/:id", updateBook);
bookRouter.get("/:id", deleteBook);

export { bookRouter };
