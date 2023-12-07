const db = require("../database/database");

module.exports.getAutres = (req, res) => {
  AutreQuery = `SELECT 
                    Autres.id AS AutreID,
                    Autres.nom,
                    Autres.mdp,
                    Categorie.designation AS Categorie,
                    Proprietaire.designation AS Proprietaire,
                    Service.designation AS Service,
                    Societe.designation AS Societe
                FROM Autres
                JOIN Categorie ON Autres.categorie_id = Categorie.id
                JOIN Proprietaire ON Autres.proprietaire_id = Proprietaire.id
                JOIN Service ON Autres.service_id = Service.id
                JOIN Societe ON Autres.societe_id = Societe.id

`;
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
  const { nom, mdp, categorie_id, proprietaire_id, service_id, societe_id } =
    req.body;
  AutreQuery =
    "INSERT INTO Autres( nom, mdp, categorie_id, proprietaire_id, service_id , societe_id ) VALUES(?, ?, ?,?,?,?)";
  db.query(
    AutreQuery,
    [nom, mdp, categorie_id, proprietaire_id, service_id, societe_id],
    (error, result) => {
      if (error) {
        console.error(error);
        return res.status(500).json({ message: "Internal Server Error" });
      }
      res.status(200).json({ message: "post Autre successfully!" });
    }
  );
};

module.exports.getAutre = (req, res) => {
  const { id } = req.params;
  AutreQuery = `SELECT 
                    Autres.id AS AutreID,
                    Autres.nom,
                    Autres.mdp,
                    Categorie.id AS Categorie,
                    Proprietaire.id AS Proprietaire,
                    Service.id AS Service,
                    Societe.id AS Societe
                FROM Autres
                JOIN Categorie ON Autres.categorie_id = Categorie.id
                JOIN Proprietaire ON Autres.proprietaire_id = Proprietaire.id
                JOIN Service ON Autres.service_id = Service.id
                JOIN Societe ON Autres.societe_id = Societe.id
                WHERE Autres.id = ?
`;
  db.query(AutreQuery, [id], (error, result) => {
    if (error) {
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
  const { nom, mdp, categorie_id, service_id, societe_id, proprietaire_id } =
    req.body;
  AutreQuery =
    "UPDATE Autres SET  nom = ?, mdp= ?, categorie_id = ?, service_id = ?, societe_id = ?, proprietaire_id = ? WHERE id = ?";
  db.query(
    AutreQuery,
    [nom, mdp, categorie_id, service_id, societe_id, proprietaire_id, id],
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
