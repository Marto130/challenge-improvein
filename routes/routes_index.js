"use strict";

const express = require("express");
const app = express();

app.use("/movies", require("./movies"));
app.use("/tvShow", require("./tvShow"));
app.use("/soundTrack", require("./soundTrack"));

module.exports = app;
