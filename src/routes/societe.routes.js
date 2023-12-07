const router = require("express").Router();
const {
  deletesociete,
  getSocietes,
  getsociete,
  postsociete,
  putsociete,
} = require("../controllers/societe.controller");

router
  .get("/", getSocietes)
  .get("/:id", getsociete)
  .post("/", postsociete)
  .put("/:id", putsociete)
  .delete("/:id", deletesociete);

module.exports = router;
