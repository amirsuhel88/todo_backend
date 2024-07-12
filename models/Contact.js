const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: [true, "First name is required"],
    minLength: 3,
    maxLength: 20,
    trim: true,
    validate: {
      validator: function (value) {
        const nameRegex = /^[a-zA-z\s]*$/;
        return nameRegex.test(value);
      },
      message: "First name should contain only Alpahbet",
    },
  },
  lastName: { type: String, required: [true, "Last name is required"] },
  email: {
    type: String,
    required: [true, "Email address is required"],
    unique: true,
  },
  age: { type: Number, required: false },
});

const Contact = mongoose.model("contacts", contactSchema);

module.exports = Contact;
