const db = require("../database/database");

module.exports.getEmails = (req, res) => {
  EmailQuery = "SELECT * FROM Email";
  db.query(EmailQuery, (error, result) => {
    if (error) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res
      .status(200)
      .json({ message: "get Emails successfully!", result: result });
  });
};

module.exports.postEmail = (req, res) => {
  const { adresse, mdp, categorie_id } = req.body;
  EmailQuery = "INSERT INTO Email(adresse, mdp, categorie_id) VALUES(?, ?, ?)";
  db.query(EmailQuery, [adresse, mdp, categorie_id], (error, result) => {
    if (error) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.status(200).json({ message: "post Email successfully!" });
  });
};

module.exports.getEmail = (req, res) => {
  const { id } = req.params;
  EmailQuery = "SELECT * FROM Email WHERE id = ?";
  db.query(EmailQuery, [id], (error, result) => {
    if (err) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res
      .status(200)
      .json({ message: "get Email successfully!", result: result });
  });
};

module.exports.putEmail = (req, res) => {
  const { id } = req.params;
  const { adresse, mdp, categorie_id } = req.body;
  EmailQuery =
    "UPDATE Email SET adresse = ?, mdp = ?, categorie_id = ? WHERE id = ?";
  db.query(EmailQuery, [adresse, mdp, categorie_id, id], (error, result) => {
    if (error) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res
      .status(200)
      .json({ message: "update Email successfully!", result: result });
  });
};

module.exports.deleteEmail = (req, res) => {
  const { id } = req.params;
  EmailQuery = "DELETE FROM Email WHERE id = ?";
  db.query(EmailQuery, [id], (error, result) => {
    if (error) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res
      .status(200)
      .json({ message: "delete Email successfully!", result: result });
  });
};
