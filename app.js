const express = require("express");
const bodyParser = require("body-parser");
const Contact = require("./routes/ContactRouter");
// const product = require("./routes/ProductRoute");
const contact = require("./routes/ContactRouter");

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use("/api", contact);

module.exports = app;
