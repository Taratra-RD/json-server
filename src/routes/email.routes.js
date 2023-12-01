const router = require("express").Router();
const {
  getEmails,
  getEmail,
  putEmail,
  postEmail,
  deleteEmail,
} = require("../controllers/email.controller");

router
  .get("/", getEmails)
  .get("/:id", getEmail)
  .post("/", postEmail)
  .put("/:id", putEmail)
  .delete("/:id", deleteEmail);

module.exports = router;
