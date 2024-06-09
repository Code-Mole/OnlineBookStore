import express from "express";
import {
  getcontacts,
  getcontact,
  createcontact,
  updatecontact,
  deletecontact,
} from "../Controller/contactController.js";

const contactRouter = express.Router();

contactRouter.get("/", getcontacts);

contactRouter.get("/:id", getcontact);

contactRouter.post("/", createcontact);

contactRouter.put("/:id", updatecontact);

contactRouter.delete("/:id", deletecontact);

export { contactRouter };
