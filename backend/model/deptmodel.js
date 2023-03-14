const mongoose = require("mongoose");

const deptSchema = mongoose.Schema;

const deptModel = new deptSchema({
  fname: {
    type: String,
    required: true,
  },
  lname: {
    type: String,
    required: true,
  },
  subcode: {
    type: String,
    required: true,
  },
  subject: {
    type: String,
    required: true,
  },
  credit: {
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

module.exports = mongoose.model("deptModel", deptModel);
