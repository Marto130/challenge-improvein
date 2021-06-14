"use strict";

const express = require("express");
const { signUp, signIn, refreshToken } = require("../controllers/user");
const api = express.Router();

api.post("/signUp", signUp);
api.post("/signIn", signIn);
api.post("/refresh", refreshToken);

module.exports = api;
