const express = require("express");

const mongoose = require("mongoose");

const feesModel = require("../model/feesmodel.js");

const {
  getfees,
  getfee,
  createFees,
  updateFees,
  deleteFees,
} = require("../working/feeswork");

const Router = express.Router();

Router.get("/getfees", getfees);
Router.get("/getfee/:id", getfee);
Router.post("/createfees", createFees);
Router.patch("/updatefees/:id", updateFees);
Router.delete("/deletefees/:id", deleteFees);

module.exports = Router;
