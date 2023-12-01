const db = require("../database/database");

module.exports.getServeurs = (req, res) => {
  ServeurQuery = "SELECT * FROM Serveurs";
  db.query(ServeurQuery, (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server error" });
    }
    res
      .status(200)
      .json({ message: "get Serveurs successfully!", result: result });
  });
};

module.exports.postServeur = (req, res) => {
  const { emplacement_id, proprietaire_id, ordi_id } = req.body;
  ServeurQuery =
    "INSERT INTO Serveurs(emplacement_id, proprietaire_id, ordi_id) VALUES(?, ?, ?)";
  db.query(
    ServeurQuery,
    [emplacement_id, proprietaire_id, ordi_id],
    (error, result) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server error" });
      }
      res.status(200).json({ message: "post Serveur successfully!" });
    }
  );
};

module.exports.getServeur = (req, res) => {
  const { id } = req.params;
  ServeurQuery = "SELECT * FROM Serveurs WHERE id = ?";
  db.query(ServeurQuery, [id], (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server error" });
    }
    res
      .status(200)
      .json({ message: "get Serveur successfully!", result: result });
  });
};

module.exports.putServeur = (req, res) => {
  const { id } = req.params;
  const { emplacement_id, proprietaire_id, ordi_id } = req.body;
  ServeurQuery =
    "UPDATE Serveurs SET emplacement_id=?, proprietaire_id=?, ordi_id=? WHERE id = ?";
  db.query(
    ServeurQuery,
    [emplacement_id, proprietaire_id, ordi_id, id],
    (error, result) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server error" });
      }
      res
        .status(200)
        .json({ message: "update Serveur successfully!", result: result });
    }
  );
};

module.exports.deleteServeur = (req, res) => {
  const { id } = req.params;
  ServeurQuery = "DELETE FROM Serveurs WHERE id = ?";
  db.query(ServeurQuery, [id], (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server error" });
    }
    res
      .status(200)
      .json({ message: "delete Serveur successfully!", result: result });
  });
};
