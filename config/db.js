const mongoose = require("mongoose");
const config = require("config");
require("dotenv").config({ path: "../config.env" });

const connectDB = async () => {
  try {
    await mongoose.connect(db, {
      useNewUrlParser: true,
    });
    console.log("mongoDB connected");
  } catch (err) {
    console.log(`there was an error: ${err.message}`);
  }
};
module.exports = connectDB;
