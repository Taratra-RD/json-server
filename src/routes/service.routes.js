const router = require("express").Router();
const {
  getServices,
  getService,
  putService,
  postService,
  deleteService,
} = require("../controllers/service.controller");

router
  .get("/", getServices)
  .get("/:id", getService)
  .post("/", postService)
  .put("/:id", putService)
  .delete("/:id", deleteService);

module.exports = router;
