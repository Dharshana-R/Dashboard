const express = require("express");

const mongoose = require("mongoose");

const deptModel = require("../model/deptmodel");

const {
  getDepts,
  getDept,
  createDept,
  updateDept,
  deleteDept,
} = require("../working/deptwork");

const Router = express.Router();

Router.get("/getdepts", getDepts);
Router.get("/getdept/:id", getDept);
Router.post("/createdept", createDept);
Router.patch("/updatedept/:id", updateDept);
Router.delete("/deletedept/:id", deleteDept);

module.exports = Router;
