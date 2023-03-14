const deptModel = require("../model/deptmodel.js");

const mongoose = require("mongoose");

//get all

const getDepts = async (req, res, next) => {
  try {
    const department = await deptModel.find();
    res.status(200).json(department);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

//get one

const getDept = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json(`No workout with id: ${id}`);
  }

  const department = await deptModel.findById(id);

  if (!department) {
    return res.status(400).json(`No workout with id: ${id}`);
  }

  res.status(200).json(department);
};

//create

const createDept = async (req, res) => {
  const { fname, lname, subcode, subject, credit, gender, contact } = req.body;
  try {
    const department = await deptModel.create({
      fname,
      lname,
      subcode,
      subject,
      credit,
      gender,
      contact,
    });
    res.status(200).json(department);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

//update

const updateDept = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json(`No workout with id: ${id}`);
  }

  const department = await deptModel.findOneAndUpdate(
    {
      _id: id,
    },
    {
      ...req.body,
    }
  );

  if (!department) {
    return res.status(400).json(`No workout with id: ${id}`);
  }

  res.status(200).json(department);
};

//delete

const deleteDept = async (req, res) => {
  const { id } = req.params;

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).send(`No workout with id: ${id}`);
  }

  const department = await deptModel.findByIdAndRemove(id);

  if (!department) {
    return res.status(404).json(`No workout with id: ${id}`);
  }

  res.status(200).json(department);
};

module.exports = {
  getDepts,
  getDept,
  createDept,
  updateDept,
  deleteDept,
};
