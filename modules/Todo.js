const mongoose = require("mongoose");

const todoSchema = new mongoose.Schema({
  age: { type: Number, required: false },
});

<<<<<<< HEAD
const Todo = mongoose.model("mrinoy", todoSchema);
=======
const Todo = mongoose.model("todos", todoSchema);
>>>>>>> 9959686 (enhancedment and code tidy up.)

module.exports = Todo;
