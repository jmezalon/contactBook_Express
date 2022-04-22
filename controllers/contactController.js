const express = require("express");
const router = express.Router();

const { getAllContacts, getSingleContact } = require("../queries/contacts");

router.get("/", async (req, res) => {
  const allContacts = await getAllContacts();
  if (allContacts[0]) {
    res.status(200).json(allContacts);
  } else {
    res.status(500).json({ error: "server error" });
  }
});

// router.post("/", (req, res) => {
//   let newContact = {
//     id: contacts.contacts[contacts.length - 1].id + 1,
//     firstName: req.body.firstName,
//     lastName: req.body.lastName,
//     email: req.body.email,
//     phoneNumber: req.body.phoneNumber,
//     avatar: req.body.avatar,
//     favorite: req.body.favorite,
//   };
//   res.json(newContact);
// });

router.get("/:id", async (req, res) => {
  const id = req.params.id;
  const contact = await getSingleContact(id);
  if (contact) {
    res.status(200).json(contact);
  } else {
    res.status(500).json({ error: "not found" });
  }
});

// router.delete("/:id", (req, res) => {
//   let id = parseInt(req.params.id);
//   let contact = contacts.contacts.filter((contact) => contact.id !== id);
//   res.json(contact);
// });

module.exports = router;
