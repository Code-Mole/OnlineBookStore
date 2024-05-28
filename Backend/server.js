import express from "express";

const server = express();

server.use(express.json());
server.use("/api/books", booksRouter);

const PORT = 8080;
server.listen(PORT, () => {
  console.log(`server is running on PORT ${PORT}`);
});
