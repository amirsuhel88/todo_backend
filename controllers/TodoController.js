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