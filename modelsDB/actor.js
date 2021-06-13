const mongoose = require("mongoose");

let Schema = mongoose.Schema;

const ActorSchema = new Schema({

  name: {
    type: String,
    required: [true, "The actor name is required."],
  },

  born: {
    birthDate: {type: Date},
    age: {type: Number},
    place: {type: String}
  },

  bio: {
    type: String,
    required: [true, "The actor bio is required."],
  },

  createAt: {
    type: Date,
    default: Date.now
  },

  status: {
    type: Boolean,
    default: true,
  },
});

module.exports = mongoose.model("actor", ActorSchema);
