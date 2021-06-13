"use strict";

const express = require("express");
const { createTvShow, createEpisode } = require("../controllers/tvShow");

const api = express.Router();

api.post("/", createTvShow);
api.post("/episode", createEpisode);

module.exports = api;
