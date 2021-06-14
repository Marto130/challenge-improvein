const { serializeResponse } = require("../utils/serializeResponse");
const Movie = require("../modelsDB/movie");
const Director = require("../modelsDB/director");
const Actor = require("../modelsDB/actor");

async function createMovie(req, res) {
  try {
    const movieData = req.body;
    const newMovie = new Movie(movieData);
    const savedMovie = await newMovie.save();

    return res.status(201).send(
      serializeResponse(true, "Movie created successfully.", {
        movie: savedMovie,
      })
    );
  } catch (error) {
    return res
      .status(500)
      .send(serializeResponse(false, "Error creating movie.", error.stack));
  }
}

async function getMovies(req, res) {
  try {
    const searchData = { ...req.query };
    
    if (searchData.director) {
      const directorFound = await Director.findOne({
        name: searchData.director,
      });
      searchData.director = directorFound?._id;
    }

    if (searchData.actor) {
      const actorFound = await Actor.findOne({ name: searchData.actor });
      delete searchData.actor;
      searchData.starring = actorFound?._id;
      console.log(searchData);
    }

    const moviesFound = await Movie.find(searchData, {
      createAt: 0,
      status: 0,
      _id: 0,
    })
      .populate("starring", "name born -_id")
      .populate("director", "name born -_id")
      .sort({ year: -1 })
      .exec();

    if (!moviesFound.length) {
      return res.status(201).send(
        serializeResponse(true, "Movies not found.", {
          searchData,
        })
      );
    }

    return res.status(201).send(
      serializeResponse(true, "Movies found.", {
        moviesFound,
      })
    );
  } catch (error) {
    return res
      .status(500)
      .send(
        serializeResponse(
          false,
          "Error when searching for movies in the database.",
          error.stack
        )
      );
  }
}

module.exports = {
  createMovie,
  getMovies,
};
