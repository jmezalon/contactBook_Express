-- DROP DATABASE IF EXISTS contacts_dev;
-- CREATE DATABASE contacts_dev;
DROP TABLE IF EXISTS contacts;
-- \c contacts_dev;

CREATE TABLE contacts (
    id SERIAL PRIMARY KEY,
    firstName VARCHAR,
    lastName VARCHAR,
    avatar VARCHAR,
    phoneNumber VARCHAR NOT NULL,
    email VARCHAR,
    is_favorite BOOLEAN
);

