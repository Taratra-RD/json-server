const router = require("express").Router();
const {
  getOrdinateurs,
  getOrdinateur,
  putOrdinateur,
  postOrdinateur,
  deleteOrdinateur,
} = require("../controllers/ordinateur.controller");

router
  .get("/", getOrdinateurs)
  .get("/:id", getOrdinateur)
  .post("/", postOrdinateur)
  .put("/:id", putOrdinateur)
  .delete("/:id", deleteOrdinateur);

module.exports = router;
