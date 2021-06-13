"use strict";

const express = require("express");
const { isAuth } = require("../middlewares/isAuth");
const {
  createTvShow,
  createEpisode,
  getEpisodeById,
} = require("../controllers/tvShow");

const api = express.Router();

api.use(isAuth);

api.post("/", createTvShow);
api.post("/episode", createEpisode);
api.get("/episode/:id", getEpisodeById);

module.exports = api;
