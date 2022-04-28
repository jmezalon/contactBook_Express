const pgp = require("pg-promise")();
require("dotenv").config();

const cn =
  process.env.NODE_ENV === "development"
    ? {
        host: process.env.PG_HOST,
        port: process.env.PG_PORT,
        database: process.env.PG_DATABASE,
        password: process.env.PG_PASSWORD,
        user: process.env.PG_USER,
      }
    : {
        connetionString: process.env.DATABASE_URL,
      };

const db = pgp(cn);

module.exports = db;
