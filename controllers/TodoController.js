const express = require("express");
const router = express.Router();
const Todo = require("../models/Todo");
const catchAsyncErrors = require("../middleware/catchAsyncErrors");

exports.addNewTodo = catchAsyncErrors(async (req, res, next) => {
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

exports.allTodos = catchAsyncErrors(async (req, res, next) => {
  const allTodos = await Todo.find();
  return res.status(200).json({ data: allTodos });
});

exports.deleteTodo = catchAsyncErrors(async (req, res, next) => {
  const { id } = req.params;
  await Todo.findByIdAndDelete(id);
  res.status(200).json({ msg: "Todo has been deleted." });
});
