"use strict";

const express = require("express");
const {createMovie, getMovies} = require('../controllers/movie');
const api = express.Router();

api.post("/", createMovie);
api.get("/", getMovies);

module.exports = api;
