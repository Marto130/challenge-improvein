"use strict";

const express = require("express");
const api = express.Router();

api.post("/", (req, res) => {
  res.status(200).send({ message: "Endpoint soundTrack" });
});

module.exports = api;
