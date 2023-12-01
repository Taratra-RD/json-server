const db = require("../database/database");

module.exports.getWifis = (req, res) => {
  WifiQuery = "SELECT * FROM Wifi";
  db.query(WifiQuery, (error, result) => {
    if (error) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res
      .status(200)
      .json({ message: "get Wifis successfully!", result: result });
  });
};

module.exports.postWifi = (req, res) => {
  const { nom, mdp, categorie_id } = req.body;
  WifiQuery = "INSERT INTO Wifi(nom, mdp, categorie_id) VALUES(?, ?, ?)";
  db.query(WifiQuery, [nom, mdp, categorie_id], (error, result) => {
    if (error) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.status(200).json({ message: "post Wifi successfully!" });
  });
};

module.exports.getWifi = (req, res) => {
  const { id } = req.params;
  WifiQuery = "SELECT * FROM Wifi WHERE id = ?";
  db.query(WifiQuery, [id], (error, result) => {
    if (err) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.status(200).json({ message: "get Wifi successfully!", result: result });
  });
};

module.exports.putWifi = (req, res) => {
  const { id } = req.params;
  const { nom, mdp, categorie_id } = req.body;
  WifiQuery = "UPDATE Wifi SET nom = ?, mdp= ?, categorie_id = ? WHERE id = ?";
  db.query(WifiQuery, [nom, mdp, categorie_id, id], (error, result) => {
    if (error) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res
      .status(200)
      .json({ message: "update Wifi successfully!", result: result });
  });
};

module.exports.deleteWifi = (req, res) => {
  const { id } = req.params;
  WifiQuery = "DELETE FROM Wifi WHERE id = ?";
  db.query(WifiQuery, [id], (error, result) => {
    if (error) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res
      .status(200)
      .json({ message: "delete Wifi successfully!", result: result });
  });
};
