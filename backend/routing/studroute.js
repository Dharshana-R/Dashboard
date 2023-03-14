const express = require("express");

const mongoose = require("mongoose");

const studModel = require("../model/studmodel");

const {
  getStuds,
  getStud,
  createStudent,
  updateStudent,
  deleteStudent,
} = require("../working/studwork");

const Router = express.Router();

Router.get("/getStuds", getStuds);
Router.get("/getStud/:id", getStud);
Router.post("/addStudent", createStudent);
Router.put("/updatestud/:id", updateStudent);
Router.delete("/deletestud/:id", deleteStudent);

module.exports = Router;
