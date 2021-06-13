"use strict";

const express = require("express");
const { createActor } = require("../controllers/actor");
const { isAuth } = require("../middlewares/isAuth");
const api = express.Router();

api.use(isAuth);

api.post("/", createActor);

module.exports = api;
