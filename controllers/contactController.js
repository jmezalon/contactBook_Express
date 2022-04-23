const express = require("express");
const contacts = express.Router();
const { checkPhoneNumber } = require("../validations/checkContacts");
const {
  getAllContacts,
  getSingleContact,
  createContact,
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

// contacts.delete("/:id", (req, res) => {
//   let id = parseInt(req.params.id);
//   let contacts = contacts.contacts.filter((contacts) => contacts.id !== id);
//   res.json(contacts);
// });

module.exports = contacts;
