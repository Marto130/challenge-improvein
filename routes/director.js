"use strict";

const express = require("express");
const {createDirector} = require('../controllers/director');
const api = express.Router();

api.post("/", createDirector);


module.exports = api;
