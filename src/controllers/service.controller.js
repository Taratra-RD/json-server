const db = require("../database/database");

module.exports.getServices = (req, res) => {
  serviceQuery = "SELECT * FROM Service";
  db.query(serviceQuery, (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server error" });
    }
    res
      .status(200)
      .json({ message: "get Services successfully!", result: result });
  });
};

module.exports.postService = (req, res) => {
  const { designation } = req.body;
  serviceQuery = "INSERT INTO Service(designation) VALUES(?)";
  db.query(serviceQuery, [designation], (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server error" });
    }
    res.status(200).json({ message: "post service successfully!" });
  });
};

module.exports.getService = (req, res) => {
  const { id } = req.params;
  serviceQuery = "SELECT * FROM Service WHERE id = ?";
  db.query(serviceQuery, [id], (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server error" });
    }
    res
      .status(200)
      .json({ message: "get service successfully!", result: result });
  });
};

module.exports.putService = (req, res) => {
  const { id } = req.params;
  const { designation } = req.body;
  serviceQuery = "UPDATE Service SET designation = ? WHERE id = ?";
  db.query(serviceQuery, [designation, id], (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server error" });
    }
    res
      .status(200)
      .json({ message: "update service successfully!", result: result });
  });
};

module.exports.deleteService = (req, res) => {
  const { id } = req.params;
  serviceQuery = "DELETE FROM Service WHERE id = ?";
  db.query(serviceQuery, [id], (error, result) => {
    if (error) {
      console.error(error);
      return res.status(500).json({ message: "Internal Server error" });
    }
    res
      .status(200)
      .json({ message: "delete service successfully!", result: result });
  });
};
