const router = require("express").Router();
const {
  getAdmins,
  getAdmin,
  putAdmin,
  postAdmin,
  deleteAdmin,
} = require("../controllers/admin.controller");

router
  .get("/", getAdmins)
  .get("/:id", getAdmin)
  .post("/", postAdmin)
  .put("/:id", putAdmin)
  .delete("/:id", deleteAdmin);

module.exports = router;
