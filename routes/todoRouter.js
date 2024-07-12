const express = require("express");
const router = express.Router();
const { addNewTodo } = require("../controllers/TodoController");

router.route("/todos").post(addNewTodo);

module.exports = router;
