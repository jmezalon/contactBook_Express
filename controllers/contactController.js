const express = require("express");
const router = express.Router();

const contacts = require("../contacts_dev.json");

router.get("/", (req, res) => {
  res.json(contacts);
});

router.post("/", (req, res) => {
  let newContact = {
    id: contacts.contacts[contacts.length - 1].id + 1,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    avatar: req.body.avatar,
    favorite: req.body.favorite,
  };
  res.json(newContact);
});

router.get("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let contact = contacts.contacts.find((contact) => contact.id === id);
  res.json(contact);
});

router.delete("/:id", (req, res) => {
  let id = parseInt(req.params.id);
  let contact = contacts.contacts.filter((contact) => contact.id !== id);
  res.json(contact);
});

module.exports = router;
