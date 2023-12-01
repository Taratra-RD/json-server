const router = require("express").Router();
const {
  getCategories,
  getCategory,
  putCategory,
  postCategory,
  deleteCategory,
} = require("../controllers/categorie.controller");

router
  .get("/", getCategories)
  .get("/:id", getCategory)
  .post("/", postCategory)
  .put("/:id", putCategory)
  .delete("/:id", deleteCategory);

module.exports = router;
