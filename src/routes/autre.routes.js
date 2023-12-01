const router = require("express").Router();
const {
  getAutres,
  getAutre,
  putAutre,
  postAutre,
  deleteAutre,
} = require("../controllers/autres.controller");

router
  .get("/", getAutres)
  .get("/:id", getAutre)
  .post("/", postAutre)
  .put("/:id", putAutre)
  .delete("/:id", deleteAutre);

module.exports = router;
