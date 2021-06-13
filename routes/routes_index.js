"use strict";

const express = require("express");
const app = express();

app.use("/movies", require("./movies"));
app.use("/actor", require("./actor"));
app.use("/director", require("./director"));
app.use("/tvShow", require("./tvShow"));

module.exports = app;
