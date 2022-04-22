const cors = require("cors");
const express = require("express");
const app = express();
const contactsController = require("./controllers/contactController.js");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Contact book Home!");
});

app.use("/contacts", contactsController);

// 404 PAGE
app.get("*", (req, res) => {
  res.status(404).send("Page not found");
});

require("dotenv").config();
const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log(`listinging on port ${PORT}`);
});

module.exports = app;
