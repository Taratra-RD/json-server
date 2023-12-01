const router = require("express").Router();
const {
  getEmployes,
  getEmploye,
  putEmploye,
  postEmploye,
  deleteEmploye,
} = require("../controllers/employe.controller");

router
  .get("/", getEmployes)
  .get("/:id", getEmploye)
  .post("/", postEmploye)
  .put("/:id", putEmploye)
  .delete("/:id", deleteEmploye);

module.exports = router;
