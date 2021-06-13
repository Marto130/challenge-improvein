const { serializeResponse } = require("../utils/serializeResponse");
const Director = require("../modelsDB/director");

async function createDirector(req, res) {
  try {

    const directorData = req.body
    const newDirector = new Director(directorData)
    const savedDirector = await newDirector.save();

    return res
      .status(201)
      .send(
        serializeResponse(true, "Director created successfully.", {
          director: savedDirector,
        })
      );

  } catch (error) {
    return res
      .status(500)
      .send(serializeResponse(false, "Error creating director.", error.stack));
  }
}

module.exports = {
  createDirector,
}
