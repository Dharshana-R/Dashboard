const feesModel = require("../model/feesmodel.js");

const mongoose = require("mongoose");

//get all

const getfees = async (req, res, next) => {
  try {
    const fees = await feesModel.find();
    res.status(200).json(fees);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//get one

const getfee = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json(`No workout with id: ${id}`);
  }

  const fees = await feesModel.findById(id);

  if (!fees) {
    return res.status(400).json(`No workout with id: ${id}`);
  }

  res.status(200).json(fees);
};

//create

const createFees = async (req, res) => {
  const { tution, association, exam, lab, hostel, bus, book } = req.body;
  try {
    const fees = await feesModel.create({
      tution,
      association,
      exam,
      lab,
      hostel,
      bus,
      book,
    });
    res.status(200).json(fees);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//update

const updateFees = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json(`No workout with id: ${id}`);
  }

  const fees = await feesModel.findOneAndUpdate(
    {
      _id: id,
    },
    {
      ...req.body,
    }
  );

  if (!fees) {
    return res.status(400).json(`No workout with id: ${id}`);
  }

  res.status(200).json(fees);
};

//delete

const deleteFees = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No workout with id: ${id}`);
  }

  const fees = await feesModel.findByIdAndRemove(id);

  if (!fees) {
    return res.status(404).json(`No workout with id: ${id}`);
  }

  res.status(200).json(fees);
};

module.exports = {
  getfees,
  getfee,
  createFees,
  updateFees,
  deleteFees,
};
