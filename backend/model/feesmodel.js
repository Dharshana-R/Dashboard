const mongoose = require("mongoose");

const feesSchema = mongoose.Schema;

const feesModel = new feesSchema({
  tution: {
    type: Number,
    required: true,
  },
  association: {
    type: Number,
    required: true,
  },
  exam: {
    type: Number,
    required: true,
  },
  lab: {
    type: Number,
    required: true,
  },
  hostel: {
    type: Number,
    required: true,
  },
  bus: {
    type: Number,
    required: true,
  },
  book: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("feesModel", feesModel);
