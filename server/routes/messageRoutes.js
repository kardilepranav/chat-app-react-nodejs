/* eslint-disable no-undef */
const { addMessage } = require("../controllers/messagesController");
const { getAllMessage } = require("../controllers/messagesController");
const router = require("express").Router();

router.post("/addmsg/", addMessage);
router.post("/getmsg/", getAllMessage);

module.exports = router;
