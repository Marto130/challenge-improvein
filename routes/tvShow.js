"use strict";

const express = require("express");
const api = express.Router();

api.get("/", (req, res) => {
  res.status(200).send({ message: "Endpoint tvShow" });
});

module.exports = api;
