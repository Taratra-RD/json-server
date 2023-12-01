const router = require("express").Router();
const {
  getWifis,
  getWifi,
  putWifi,
  postWifi,
  deleteWifi,
} = require("../controllers/wifi.controller");

router
  .get("/", getWifis)
  .get("/:id", getWifi)
  .post("/", postWifi)
  .put("/:id", putWifi)
  .delete("/:id", deleteWifi);

module.exports = router;
