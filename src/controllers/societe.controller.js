const db = require("../database/database");

module.exports.getSocietes = (req, res) => {
  societeQuery = "SELECT * FROM Societe";
  db.query(societeQuery, (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server error" });
    }
    res
      .status(200)
      .json({ message: "get Societes successfully!", result: result });
  });
};

module.exports.postsociete = (req, res) => {
  const { designation } = req.body;
  societeQuery = "INSERT INTO Societe(designation) VALUES(?)";
  db.query(societeQuery, [designation], (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server error" });
    }
    res.status(200).json({ message: "post societe successfully!" });
  });
};

module.exports.getsociete = (req, res) => {
  const { id } = req.params;
  societeQuery = "SELECT * FROM Societe WHERE id = ?";
  db.query(societeQuery, [id], (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server error" });
    }
    res
      .status(200)
      .json({ message: "get societe successfully!", result: result });
  });
};

module.exports.putsociete = (req, res) => {
  const { id } = req.params;
  const { designation } = req.body;
  societeQuery = "UPDATE Societe SET designation = ? WHERE id = ?";
  db.query(societeQuery, [designation, id], (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server error" });
    }
    res
      .status(200)
      .json({ message: "update societe successfully!", result: result });
  });
};

module.exports.deletesociete = (req, res) => {
  const { id } = req.params;
  societeQuery = "DELETE FROM Societe WHERE id = ?";
  db.query(societeQuery, [id], (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server error" });
    }
    res
      .status(200)
      .json({ message: "delete societe successfully!", result: result });
  });
};
