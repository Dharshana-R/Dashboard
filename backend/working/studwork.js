const studModel = require("../model/studmodel");

const mongoose = require("mongoose");

//get all

const getStuds = async (req, res, next) => {
  try {
    const students = await studModel.find();
    res.status(200).json(students);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//get one

const getStud = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json(`No workout with id: ${id}`);
  }

  const students = await studModel.findById(id);

  if (!students) {
    return res.status(400).json(`No workout with id: ${id}`);
  }

  res.status(200).json(students);
};

//create

const createStudent = async (req, res) => {
  const { reg, fname, lname, dob, gender, contact } = req.body;
  try {
    const students = await studModel.create({
      reg,
      fname,
      lname,
      dob,
      gender,
      contact,
    });
    res.status(200).json(students);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//update

const updateStudent = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json(`No workout with id: ${id}`);
  }

  const students = await studModel.findOneAndUpdate(
    {
      _id: id,
    },
    {
      ...req.body,
    }
  );

  if (!students) {
    return res.status(400).json(`No workout with id: ${id}`);
  }

  res.status(200).json(students);
};

//delete

const deleteStudent = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No workout with id: ${id}`);
  }

  const students = await studModel.findByIdAndRemove(id);

  if (!students) {
    return res.status(404).json(`No workout with id: ${id}`);
  }

  res.status(200).json(students);
};

module.exports = {
  getStuds,
  getStud,
  createStudent,
  updateStudent,
  deleteStudent,
};
