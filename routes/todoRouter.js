const express = require("express");
const router = express.Router();
const { addNewTodo, allTodos } = require("../controllers/TodoController");

router.route("/todos").post(addNewTodo).get(allTodos);

module.exports = router;
