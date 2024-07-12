const express = require("express");
const bodyParser = require("body-parser");
const contact = require("./routes/contactRouter");
const todo = require("./routes/todoRouter");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", contact);
app.use("/api", todo);

module.exports = app;
