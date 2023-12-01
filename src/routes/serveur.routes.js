const router = require("express").Router();
const {
  getServeurs,
  getServeur,
  putServeur,
  postServeur,
  deleteServeur,
} = require("../controllers/serveur.controller");

router
  .get("/", getServeurs)
  .get("/:id", getServeur)
  .post("/", postServeur)
  .put("/:id", putServeur)
  .delete("/:id", deleteServeur);

module.exports = router;
