const port = 8080;
const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(express.json()); // Add this line to parse JSON in the request body
app.use(express.urlencoded({ extended: true })); // Add this line to parse form data
app.use(cors());

const db = mysql.createConnection({
  user: "inventa",
  password: "0",
  database: "pass",
});

db.connect((err) => {
  if (err) {
    console.log(err);
  } else {
    console.log("connected");
  }
});

//Create tables
const createTables = (req, res) => {
  sql =
    "CREATE TABLE login(id INT AUTO_INCREMENT PRIMARY KEY, name VARCHAR(255), password VARCHAR(255))";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
};

const getLogin = (req, res) => {
  sql = "SELECT * FROM login";

  db.query(sql, (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
};

const postLogin = (req, res) => {
  sql = "INSERT INTO login(name, password) VALUES(?,?)";

  db.query(sql, [req.body.name, req.body.password], (err, result) => {
    if (err) {
      console.log(err);
    } else {
      res.json(result);
    }
  });
};

//App use
app.get("/", createTables);
app.get("/api", getLogin);
app.post("/api", postLogin);

app.listen(port, () => {
  console.log("server listening on port " + port);
});
