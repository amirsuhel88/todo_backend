const connectToDB = require("./db-connect");

const app = require("./app");

//port connection
const port = 3000;
app.listen(port, () => {
  console.log("listening");
});

connectToDB().then(() => {
  console.log("Database connected");
});
