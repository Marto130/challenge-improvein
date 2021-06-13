"use strict";

const express = require("express");
const { createTvShow, createEpisode, getEpisodeById } = require("../controllers/tvShow");

const api = express.Router();

api.post("/", createTvShow);
api.post("/episode", createEpisode);
api.get("/episode/:id", getEpisodeById);


module.exports = api;
