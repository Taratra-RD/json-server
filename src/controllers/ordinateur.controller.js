const db = require("../database/database");

module.exports.getOrdinateurs = (req, res) => {
  OrdinateurQuery = "SELECT * FROM Ordinateur";
  db.query(OrdinateurQuery, (error, result) => {
    if (error) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res
      .status(200)
      .json({ message: "get Ordinateurs successfully!", result: result });
  });
};

module.exports.postOrdinateur = (req, res) => {
  const { ip, mot_de_passe, categorie_id } = req.body;
  OrdinateurQuery =
    "INSERT INTO Ordinateur(ip, mot_de_passe, categorie_id) VALUES(?, ?, ?)";
  db.query(
    OrdinateurQuery,
    [ip, mot_de_passe, categorie_id],
    (error, result) => {
      if (error) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
      }
      res.status(200).json({ message: "post Ordinateur successfully!" });
    }
  );
};

module.exports.getOrdinateur = (req, res) => {
  const { id } = req.params;
  OrdinateurQuery = "SELECT * FROM Ordinateur WHERE id = ?";
  db.query(OrdinateurQuery, [id], (error, result) => {
    if (err) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res
      .status(200)
      .json({ message: "get Ordinateur successfully!", result: result });
  });
};

module.exports.putOrdinateur = (req, res) => {
  const { id } = req.params;
  const { ip, mot_de_passe, categorie_id } = req.body;
  OrdinateurQuery =
    "UPDATE Ordinateur SET ip = ?, mot_de_passe = ?, categorie_id = ? WHERE id = ?";
  db.query(
    OrdinateurQuery,
    [ip, mot_de_passe, categorie_id, id],
    (error, result) => {
      if (error) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
      }
      res
        .status(200)
        .json({ message: "update Ordinateur successfully!", result: result });
    }
  );
};

module.exports.deleteOrdinateur = (req, res) => {
  const { id } = req.params;
  OrdinateurQuery = "DELETE FROM Ordinateur WHERE id = ?";
  db.query(OrdinateurQuery, [id], (error, result) => {
    if (error) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res
      .status(200)
      .json({ message: "delete Ordinateur successfully!", result: result });
  });
};
