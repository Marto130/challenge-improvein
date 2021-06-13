"use strict";

const express = require("express");
const {createMovie} = require('../controllers/movie');
const api = express.Router();

api.post("/", createMovie);

module.exports = api;
