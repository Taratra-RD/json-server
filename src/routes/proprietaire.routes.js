const router = require("express").Router();
const {
  getProprietaires,
  getProprietaire,
  putProprietaire,
  postProprietaire,
  deleteProprietaire,
} = require("../controllers/proprietaire.controller");

router
  .get("/", getProprietaires)
  .get("/:id", getProprietaire)
  .post("/", postProprietaire)
  .put("/:id", putProprietaire)
  .delete("/:id", deleteProprietaire);

module.exports = router;
