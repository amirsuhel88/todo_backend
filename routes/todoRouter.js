const express = require("express");
const router = express.Router();
const {
  addNewTodo,
  allTodos,
  deleteTodo,
  findTodo,
} = require("../controllers/TodoController");

router.route("/todos").post(addNewTodo).get(allTodos);
router.route("/todo/:id").delete(deleteTodo).get(findTodo);

module.exports = router;
