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

async function getEpisodeById(req, res) {
  try {
    const { id: episodeId } = req.params;

    const episodeFound = await Episode.findOne(
      { _id: episodeId },
      {
        createAt: 0,
        status: 0,
        _id: 0,
      }
    )
      .populate('tvShow', 'title -_id')
      .populate("starring", "name -_id")
      .populate("director", "name -_id")
      .exec();

    if (!episodeFound) {
      return res.status(201).send(
        serializeResponse(true, "Episode not found.", {
          episodeId,
        })
      );
    }

    return res.status(201).send(
      serializeResponse(true, "Episode found.", {
        episodeFound,
      })
    );
  } catch (error) {
    return res
      .status(500)
      .send(
        serializeResponse(
          false,
          "Error when searching Tv Show episode in the database.",
          error.stack
        )
      );
  }
}

module.exports = {
  createTvShow,
  createEpisode,
  getEpisodeById,
};
