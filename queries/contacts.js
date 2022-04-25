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

const createContact = async (contact) => {
  try {
    const newContact = await db.one(
      "INSERT INTO contacts (firstName, lastName, avatar, phoneNumber, email, is_favorite) VALUES($1,$2,$3,$4,$5,$6) RETURNING *",
      [
        contact.firstName,
        contact.lastName,
        contact.avatar,
        contact.phoneNumber,
        contact.email,
        contact.is_favorite,
      ]
    );
    return newContact;
  } catch (error) {
    return error;
  }
};

const deleteContact = async (id) => {
  try {
    const deletedContact = await db.one(
      "DELETE FROM contacts WHERE id = $1 RETURNING *",
      id
    );
    return deletedContact;
  } catch (error) {
    return error;
  }
};

const updateContact = async (id, contact) => {
  try {
    const updatedContact = await db.one(
      "UPDATE contacts SET firstName=$1, lastName=$2, avatar=$3, phoneNumber=$4, email=$5, is_favorite=$6 WHERE id=$7 RETURNING *",
      [
        contact.firstName,
        contact.lastName,
        contact.avatar,
        contact.phoneNumber,
        contact.email,
        contact.is_favorite,
        id,
      ]
    );
    return updatedContact;
  } catch (error) {
    return error;
  }
};

module.exports = {
  getAllContacts,
  getSingleContact,
  createContact,
  deleteContact,
  updateContact,
};
