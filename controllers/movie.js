const { serializeResponse } = require("../utils/serializeResponse");
const Movie = require("../modelsDB/movie");

async function createMovie(req, res) {
  try {

    const movieData = req.body
    const newMovie = new Movie(movieData)
    const savedMovie = await newMovie.save();

    return res
      .status(201)
      .send(
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





module.exports = {
  createMovie,
}
