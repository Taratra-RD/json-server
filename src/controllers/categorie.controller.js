const db = require("../database/database");

module.exports.getCategories = (req, res) => {
  categoryQuery = "SELECT * FROM Categorie";
  db.query(categoryQuery, (error, result) => {
    if (error) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res
      .status(200)
      .json({ message: "get categories successfully!", result: result });
  });
};

module.exports.postCategory = (req, res) => {
  const { designation } = req.body;
  categoryQuery = "INSERT INTO Categorie(designation) VALUES(?)";
  db.query(categoryQuery, [designation], (error, result) => {
    if (error) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res.status(200).json({ message: "post category successfully!" });
  });
};

module.exports.getCategory = (req, res) => {
  const { id } = req.params;
  categoryQuery = "SELECT * FROM Categorie WHERE id = ?";
  db.query(categoryQuery, [id], (error, result) => {
    if (err) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res
      .status(200)
      .json({ message: "get category successfully!", result: result });
  });
};

module.exports.putCategory = (req, res) => {
  const { id } = req.params;
  const { designation } = req.body;
  categoryQuery = "UPDATE Categorie SET designation = ? WHERE id = ?";
  db.query(categoryQuery, [designation, id], (error, result) => {
    if (error) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res
      .status(200)
      .json({ message: "update category successfully!", result: result });
  });
};

module.exports.deleteCategory = (req, res) => {
  const { id } = req.params;
  categoryQuery = "DELETE FROM Categorie WHERE id = ?";
  db.query(categoryQuery, [id], (error, result) => {
    if (error) {
      console.error(err);
      return res.status(500).json({ message: "Internal Server Error" });
    }
    res
      .status(200)
      .json({ message: "delete category successfully!", result: result });
  });
};
