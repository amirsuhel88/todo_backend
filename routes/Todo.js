const express = require("express");
const router = express.Router();
const Todo = require("../modules/Todo");

router.post("/todo", async (req, res) => {
  try {
    const newTodo = new Todo(req.body);
    await newTodo.save().then((savedTodo) => {
      console.log(savedTodo);
      res.status(201).json({ msg: "Todo successfully saved" });
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ msg: "Unable to save new Todo" });
  }
});

module.exports = router;
