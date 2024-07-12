const express = require("express");
const router = express.Router();
const {
  addNewTodo,
  allTodos,
  deleteTodo,
} = require("../controllers/TodoController");

router.route("/todos").post(addNewTodo).get(allTodos);
router.route("/todo/:id").delete(deleteTodo);

module.exports = router;
