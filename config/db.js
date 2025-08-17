const mongoose = require("mongoose");
require("dotenv").config();

const dbconnect = function () {
  mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
    .then(function () {
      console.log("Success");
    })
    .catch(function (error) {
      console.log("Not Success");
      console.log(error.message);
      process.exit(1);
    });
};

module.exports = dbconnect;
