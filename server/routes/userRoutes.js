/* eslint-disable no-undef */
const { register } = require("../controllers/usersController");
const { login } = require("../controllers/usersController");
const { setUserAvatar } = require("../controllers/usersController");
const { getAllUsers } = require("../controllers/usersController");
const router = require("express").Router();

router.post("/register", register);
router.post("/login", login);
router.post("/setAvatar/:id", setUserAvatar);
router.get("/allUsers/:id", getAllUsers);

module.exports = router;
