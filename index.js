"use strict";

const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const dotenv = require("dotenv");

const NODE_ENV = process.env.NODE_ENV || "local";

dotenv.config({
  path: `${NODE_ENV}.env`,
});

const app = express();

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1", require("./routes/routes_index"));


module.exports = { app, NODE_ENV };
