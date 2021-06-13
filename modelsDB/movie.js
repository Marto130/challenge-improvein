const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const MovieSchema = new Schema({

    title: {
      type: String,
      required: [true, 'The movie title is required.']
    },

    starring: {
        type:[ Schema.Types.ObjectId ],
        ref: "actor"
    },

    director: {
      type: Schema.Types.ObjectId,
      ref: "director",
      required: [true, 'The movie director is required.']
    },

    year: {
        type: String,
    },

    genre: {
        type: [],
        required: [true, 'The genre is required']
    },

    originalLanguaje: {
      type: String,
    },

    status: {
        type: Boolean,
        default: true

    },

    createAt: {
        type: Date,
        default: Date.now
    }

});


module.exports = mongoose.model('movie', MovieSchema);
