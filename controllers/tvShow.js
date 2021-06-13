const { serializeResponse } = require("../utils/serializeResponse");
const TvShow = require("../modelsDB/tvShow");
const Episode = require("../modelsDB/episodesTvShow");
const Director = require("../modelsDB/director");
const Actor = require("../modelsDB/actor");

async function createTvShow(req, res) {
  try {
    const tvShowData = req.body;
    const newTvShow = new TvShow(tvShowData);
    const savedTvShow = await newTvShow.save();

    return res.status(201).send(
      serializeResponse(true, "TvShow created successfully.", {
        tvShow: savedTvShow,
      })
    );
  } catch (error) {
    return res
      .status(500)
      .send(serializeResponse(false, "Error creating tvShow.", error.stack));
  }
}

async function createEpisode(req, res) {
  try {
    const episodeData = req.body;
    const newEpisode = new Episode(episodeData);
    const savedEpisode = await newEpisode.save();

    return res.status(201).send(
      serializeResponse(true, "Episode created successfully.", {
        episode: savedEpisode,
      })
    );
  } catch (error) {
    return res
      .status(500)
      .send(serializeResponse(false, "Error creating episode.", error.stack));
  }
}

module.exports = {
  createTvShow,
  createEpisode
}
