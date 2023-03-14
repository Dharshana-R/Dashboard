require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const cors = require("cors");

const student = require("../backend/routing/studroute");
const department = require("../backend/routing/deptroute");
const fees = require("../backend/routing/feesroute");

const app = express();
app.use(bodyParser.json());
app.use(express.json());

var corsOptions = {
  origin: "http://localhost:4200",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  //credentials: true,
};
app.use(cors(corsOptions));

// Import Routes
//students
app.use("/api/student", student);
//department
app.use("/api/department", department);
//fees
app.use("/api/fees", fees);

// Connect to MongoDB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    app.listen(process.env.PORT, () => {
      console.log("MongoDB Connected", process.env.PORT);
    });
  })
  .catch((error) => {
    console.log(error);
  });
