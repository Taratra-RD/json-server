const db = require("../database/database");

module.exports.getProprietaires = (req, res) => {
  ProprietaireQuery = "SELECT * FROM Proprietaire";
  db.query(ProprietaireQuery, (error, result) => {
    if (error) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res
      .status(200)
      .json({ message: "get Proprietaires successfully!", result: result });
  });
};

module.exports.postProprietaire = (req, res) => {
  const { designation } = req.body;
  ProprietaireQuery = "INSERT INTO Proprietaire(designation) VALUES(?)";
  db.query(ProprietaireQuery, [designation], (error, result) => {
    if (error) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.status(200).json({ message: "post Proprietaire successfully!" });
  });
};

module.exports.getProprietaire = (req, res) => {
  const { id } = req.params;
  ProprietaireQuery = "SELECT * FROM Proprietaire WHERE id = ?";
  db.query(ProprietaireQuery, [id], (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res
      .status(200)
      .json({ message: "get Proprietaire successfully!", result: result });
  });
};

module.exports.putProprietaire = (req, res) => {
  const { id } = req.params;
  const { designation } = req.body;
  ProprietaireQuery = "UPDATE Proprietaire SET designation = ? WHERE id = ?";
  db.query(ProprietaireQuery, [designation, id], (error, result) => {
    if (error) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res
      .status(200)
      .json({ message: "update Proprietaire successfully!", result: result });
  });
};

module.exports.deleteProprietaire = (req, res) => {
  const { id } = req.params;
  ProprietaireQuery = "DELETE FROM Proprietaire WHERE id = ?";
  db.query(ProprietaireQuery, [id], (error, result) => {
    if (error) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res
      .status(200)
      .json({ message: "delete Proprietaire successfully!", result: result });
  });
};
