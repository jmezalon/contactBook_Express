const express = require("express");
const contacts = express.Router();
const {
  checkPhoneNumber,
  validateURL,
} = require("../validations/checkContacts");
const {
  getAllContacts,
  getSingleContact,
  createContact,
  deleteContact,
  updateContact,
} = require("../queries/contacts");

contacts.get("/", async (req, res) => {
  const allContacts = await getAllContacts();
  if (allContacts[0]) {
    res.status(200).json(allContacts);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

contacts.post("/", checkPhoneNumber, async (req, res) => {
  try {
    const contact = await createContact(req.body);
    res.json(contact);
  } catch (error) {
    res.status(400).json({ error: "error" });
  }
});

contacts.get("/:id", async (req, res) => {
  const id = req.params.id;
  const contact = await getSingleContact(id);
  if (contact) {
    res.json(contact);
  } else {
    res.status(500).json({ error: "not found" });
  }
});

contacts.delete("/:id", async (req, res) => {
  let id = req.params.id;
  const deletedContact = await deleteContact(id);
  if (deletedContact.id) {
    res.status(200).json(deletedContact);
  } else {
    res.status(400).json({ error: "contact not found" });
  }
});

contacts.patch("/:id", checkPhoneNumber, async (req, res) => {
  const { id } = req.params;
  const updatedContact = await updateContact(id, req.body);
  res.status(200).json(updatedContact);
});

module.exports = contacts;
