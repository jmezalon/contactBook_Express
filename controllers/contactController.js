const express = require("express");
const router = express.Router();

const contacts = require("../contacts_dev.json");

router.get("/", (req, res) => {
  res.json(contacts);
});

router.get("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let contact = contacts.contacts.find((contact) => contact.id === id);
  res.json(contact);
});

module.exports = router;
