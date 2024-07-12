const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  todo: { type: String, required: true },
});

const Todo = mongoose.model("todos", todoSchema);

module.exports = Todo;
