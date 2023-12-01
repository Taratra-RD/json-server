const router = require("express").Router();
const { signInUser, signUpUser } = require("../controllers/auth.controller");

router.post("/signin", signInUser).post("/signup", signUpUser);

module.exports = router;
