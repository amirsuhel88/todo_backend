const mongoose = require("mongoose");

//database connection
const connectToDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/mrinmoystodo");
    console.log("connected to mongoDB");
  } catch (error) {
    console.log(error);
    process.exit(1);
  }
};

module.exports = connectToDB;
