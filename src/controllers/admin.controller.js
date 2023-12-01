const db = require("../database/database");

module.exports.getAdmins = (req, res) => {
  AdminQuery = "SELECT * FROM Admin";
  db.query(AdminQuery, (error, result) => {
    if (error) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res
      .status(200)
      .json({ message: "get Admins successfully!", result: result });
  });
};

module.exports.postAdmin = (req, res) => {
  const { username, password } = req.body;
  AdminQuery = "INSERT INTO Admin(username, password) VALUES(?, ?)";
  db.query(AdminQuery, [username, password], (error, result) => {
    if (error) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.status(200).json({ message: "post Admin successfully!" });
  });
};

module.exports.getAdmin = (req, res) => {
  const { id } = req.params;
  AdminQuery = "SELECT * FROM Admin WHERE id = ?";
  db.query(AdminQuery, [id], (error, result) => {
    if (err) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res
      .status(200)
      .json({ message: "get Admin successfully!", result: result });
  });
};

module.exports.putAdmin = (req, res) => {
  const { id } = req.params;
  const { username, password } = req.body;
  AdminQuery = "UPDATE Admin SET username=?, password=? WHERE id = ?";
  db.query(AdminQuery, [username, password, id], (error, result) => {
    if (error) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res
      .status(200)
      .json({ message: "update Admin successfully!", result: result });
  });
};

module.exports.deleteAdmin = (req, res) => {
  const { id } = req.params;
  AdminQuery = "DELETE FROM Admin WHERE id = ?";
  db.query(AdminQuery, [id], (error, result) => {
    if (error) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res
      .status(200)
      .json({ message: "delete Admin successfully!", result: result });
  });
};
