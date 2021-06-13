"use strict";

const express = require("express");
const {signUp, signIn} = require('../controllers/user');
const api = express.Router();

api.post("/signUp", signUp);
api.post("/signIn", signIn);

module.exports = api;
