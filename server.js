const express = require("express");
const connectToDB = require("./db-connect");
const Contact = require("./routes/Contact");
const Todo = require("./routes/Todo");
const app = express();

const bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

//port connection
app.use("/api", Contact);
app.use("/api", Todo);

const port = 3000;
app.listen(port, () => {
  console.log("listening");
});

connectToDB().then(() => {
  console.log("Database connected");
});
