"use strict";

const express = require("express");
const {createActor} = require('../controllers/actor');
const api = express.Router();

api.post("/", createActor);


module.exports = api;
