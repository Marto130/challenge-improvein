const mongoose = require("mongoose");

let Schema = mongoose.Schema;

const DirectorSchema = new Schema({

  name: {
    type: String,
    required: [true, "The director name is required."],
  },

  born: {
    birthDate: {type: Date},
    age: {type: Number},
    place: {type: String}
  },

  bio: {
    type: String,
    required: [true, "The director bio is required."],
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

module.exports = mongoose.model("director", DirectorSchema);
