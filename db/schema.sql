DROP DATABASE IF EXISTS contacts;
CREATE DATABASE contacts;

\c contacts;

CREATE TABLE contacts_entries (
    id SERIAL PRIMARY KEY,
    first_name VARCHAR,
    last_name VARCHAR,
    avatar VARCHAR,
    phone_number VARCHAR NOT NULL,
    email VARCHAR,
    is_favorite BOOLEAN
);

