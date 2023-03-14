const mongoose = require("mongoose");

const studSchema = mongoose.Schema;

const studModel = new studSchema({
  reg: {
    type: String,
    required: true,
  },
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  dob: {
    type: Number,
    required: true,
  },
  gender: {
    type: String,
    required: true,
  },
  contact: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("studModel", studModel);
