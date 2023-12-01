const db = require("../database/database");

module.exports.getEmplacements = (req, res) => {
  EmplacementQuery = "SELECT * FROM Emplacement";
  db.query(EmplacementQuery, (error, result) => {
    if (error) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res
      .status(200)
      .json({ message: "get Emplacements successfully!", result: result });
  });
};

module.exports.postEmplacement = (req, res) => {
  const { services, societe } = req.body;
  EmplacementQuery = "INSERT INTO Emplacement(services, societe) VALUES(?, ?)";
  db.query(EmplacementQuery, [services, societe], (error, result) => {
    if (error) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.status(200).json({ message: "post Emplacement successfully!" });
  });
};

module.exports.getEmplacement = (req, res) => {
  const { id } = req.params;
  EmplacementQuery = "SELECT * FROM Emplacement WHERE id = ?";
  db.query(EmplacementQuery, [id], (error, result) => {
    if (err) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res
      .status(200)
      .json({ message: "get Emplacement successfully!", result: result });
  });
};

module.exports.putEmplacement = (req, res) => {
  const { id } = req.params;
  const { services, societe } = req.body;
  EmplacementQuery =
    "UPDATE Emplacement SET services = ?, societe = ? WHERE id = ?";
  db.query(EmplacementQuery, [services, societe, id], (error, result) => {
    if (error) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res
      .status(200)
      .json({ message: "update Emplacement successfully!", result: result });
  });
};

module.exports.deleteEmplacement = (req, res) => {
  const { id } = req.params;
  EmplacementQuery = "DELETE FROM Emplacement WHERE id = ?";
  db.query(EmplacementQuery, [id], (error, result) => {
    if (error) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res
      .status(200)
      .json({ message: "delete Emplacement successfully!", result: result });
  });
};
