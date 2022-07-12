const mongoose = require("mongoose");
const config = require("config");
require("dotenv").config({ path: "../config.env" });
const db = process.env.MONGO_URI || "mongodb+srv://devpartner:devpartner@cluster0.dqnf9.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"

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
