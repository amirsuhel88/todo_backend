const express = require("express");
const router = express.Router();

const { addNewContact } = require("../controllers/ContactController");

router.route("/contact").post(addNewContact);

module.exports = router;
