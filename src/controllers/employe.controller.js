const db = require("../database/database");

module.exports.getEmployes = (req, res) => {
  EmployeQuery = "SELECT * FROM Employe";
  db.query(EmployeQuery, (error, result) => {
    if (error) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res
      .status(200)
      .json({ message: "get Employes successfully!", result: result });
  });
};

module.exports.postEmploye = (req, res) => {
  const { nom, prenom, emplacement_id, proprietaire_id, ordi_id } = req.body;
  EmployeQuery =
    "INSERT INTO Employe(nom, prenom, emplacement_id, proprietaire_id, ordi_id) VALUES(?,?,?,?,?)";
  db.query(
    EmployeQuery,
    [nom, prenom, emplacement_id, proprietaire_id, ordi_id],
    (error, result) => {
      if (error) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
      }
      res.status(200).json({ message: "post Employe successfully!" });
    }
  );
};

module.exports.getEmploye = (req, res) => {
  const { id } = req.params;
  EmployeQuery = "SELECT * FROM Employe WHERE id = ?";
  db.query(EmployeQuery, [id], (error, result) => {
    if (err) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res
      .status(200)
      .json({ message: "get Employe successfully!", result: result });
  });
};

module.exports.putEmploye = (req, res) => {
  const { id } = req.params;
  const { nom, prenom, emplacement_id, proprietaire_id, ordi_id } = req.body;
  EmployeQuery =
    "UPDATE Employe SET nom=?, prenom=?, emplacement_id=?, proprietaire_id=?, ordi_id=? WHERE id = ?";
  db.query(
    EmployeQuery,
    [nom, prenom, emplacement_id, proprietaire_id, ordi_id, id],
    (error, result) => {
      if (error) {
        console.error(err);
        return res.status(500).json({ message: "Internal Server Error" });
      }
      res
        .status(200)
        .json({ message: "update Employe successfully!", result: result });
    }
  );
};

module.exports.deleteEmploye = (req, res) => {
  const { id } = req.params;
  EmployeQuery = "DELETE FROM Employe WHERE id = ?";
  db.query(EmployeQuery, [id], (error, result) => {
    if (error) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res
      .status(200)
      .json({ message: "delete Employe successfully!", result: result });
  });
};
