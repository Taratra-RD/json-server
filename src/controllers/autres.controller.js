const db = require("../database/database");

module.exports.getAutres = (req, res) => {
  AutreQuery = "SELECT * FROM Autres";
  db.query(AutreQuery, (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res
      .status(200)
      .json({ message: "get Autres successfully!", result: result });
  });
};

module.exports.postAutre = (req, res) => {
  const { categorie, nom, mdp, categorie_id } = req.body;
  AutreQuery =
    "INSERT INTO Autres(categorie, nom, mdp, categorie_id) VALUES(?, ?, ?)";
  db.query(AutreQuery, [categorie, nom, mdp, categorie_id], (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.status(200).json({ message: "post Autre successfully!" });
  });
};

module.exports.getAutre = (req, res) => {
  const { id } = req.params;
  AutreQuery = "SELECT * FROM Autres WHERE id = ?";
  db.query(AutreQuery, [id], (error, result) => {
    if (err) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res
      .status(200)
      .json({ message: "get Autre successfully!", result: result });
  });
};

module.exports.putAutre = (req, res) => {
  const { id } = req.params;
  const { categorie, nom, mdp, categorie_id } = req.body;
  AutreQuery =
    "UPDATE Autres SET categorie = ?, nom = ?, mdp= ?, categorie_id = ? WHERE id = ?";
  db.query(
    AutreQuery,
    [categorie, nom, mdp, categorie_id, id],
    (error, result) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
      }
      res
        .status(200)
        .json({ message: "update Autre successfully!", result: result });
    }
  );
};

module.exports.deleteAutre = (req, res) => {
  const { id } = req.params;
  AutreQuery = "DELETE FROM Autres WHERE id = ?";
  db.query(AutreQuery, [id], (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res
      .status(200)
      .json({ message: "delete Autre successfully!", result: result });
  });
};
