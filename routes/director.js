"use strict";

const express = require("express");
const { createDirector } = require("../controllers/director");
const { isAuth } = require("../middlewares/isAuth");

const api = express.Router();
api.use(isAuth);

api.post("/", createDirector);

module.exports = api;
