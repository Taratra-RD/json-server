const router = require("express").Router();
const {
  getEmplacements,
  getEmplacement,
  putEmplacement,
  postEmplacement,
  deleteEmplacement,
} = require("../controllers/emplacement.controller");

router
  .get("/", getEmplacements)
  .get("/:id", getEmplacement)
  .post("/", postEmplacement)
  .put("/:id", putEmplacement)
  .delete("/:id", deleteEmplacement);

module.exports = router;
