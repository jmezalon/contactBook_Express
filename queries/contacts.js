const db = require("../db/dbConfig");

const getAllContacts = async () => {
  try {
    const allContacts = await db.any("SELECT * FROM contacts");
    return allContacts;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllContacts };
