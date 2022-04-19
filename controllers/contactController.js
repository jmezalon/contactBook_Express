const express = require("express");
const contacts = express.Router();

contacts.get("/", (req, res) => {
  res.json({ status: ok });
});

module.exports = contacts;
