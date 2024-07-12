const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  age: { type: Number, required: false },
});

const Todo = mongoose.model("mrinoy", todoSchema);

module.exports = Todo;
