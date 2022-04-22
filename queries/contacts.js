const db = require("../db/dbConfig");

const getAllContacts = async () => {
  try {
    const allContacts = await db.any("SELECT * FROM contacts");
    return allContacts;
  } catch (error) {
    return error;
  }
};

const getSingleContact = async (id) => {
  try {
    const singleContact = await db.one(
      "SELECT * FROM contacts WHERE id=$1",
      id
    );
    return singleContact;
  } catch (error) {
    return error;
  }
};

module.exports = { getAllContacts, getSingleContact };
