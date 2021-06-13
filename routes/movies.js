"use strict";

const express = require("express");
const { createMovie, getMovies } = require("../controllers/movie");
const { isAuth } = require("../middlewares/isAuth");
const api = express.Router();

api.use(isAuth);

api.post("/", createMovie);
api.get("/", isAuth, getMovies);

module.exports = api;
