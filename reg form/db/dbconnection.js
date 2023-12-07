const mongoose = require("mongoose");

const connectDB = () => {
    mongoose  
      .connect("mongodb://localhost:27017/userSignUp")
      .then(() => {
        console.log("connection successfully");
      })
      .catch((err) => {
        console.log(err, "error");
      });
  };
  
  module.exports = { connectDB };
  