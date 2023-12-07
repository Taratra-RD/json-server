const mysql = require("mysql2");
require("dotenv").config({ path: "./.env" });

const db = mysql.createConnection({
  host: process.env.DATABASE_HOST || "localhost",
  port: 3306,
  user: process.env.DATABASE_USER || "inventa",
  password: process.env.DATABASE_PASSWORD || "0",
  database: process.env.DATABASE_NAME || "passwordv2",
});

module.exports = db;
