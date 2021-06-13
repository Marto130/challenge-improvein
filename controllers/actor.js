const { serializeResponse } = require("../utils/serializeResponse");
const Actor = require("../modelsDB/actor");

async function createActor(req, res) {
  try {

    const actorData = req.body
    const newActor = new Actor(actorData)
    const savedActor = await newActor.save();

    return res
      .status(201)
      .send(
        serializeResponse(true, "Actor created successfully.", {
          actor: savedActor,
        })
      );

  } catch (error) {
    return res
      .status(500)
      .send(serializeResponse(false, "Error creating actor.", error.stack));
  }
}

module.exports = {
  createActor,
}
