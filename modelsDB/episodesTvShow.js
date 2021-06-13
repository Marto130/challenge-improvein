const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const EpisodesTvShowSchema = new Schema({

    tvShow: {
      type:[ Schema.Types.ObjectId ],
      ref: "tvShow",
      required: [true, 'The Tv Show is required.'],
    },

    season: {
      type: Number,
      required: [true, 'The season is required.'],
    },

    episode: {
      type: Number,
      required: [true, 'The episode is required.'],
    },

    starring: {
        type:[ Schema.Types.ObjectId ],
        ref: "actor",
        required: [true, 'The actors are required.']
    },

    director: {
      type: Schema.Types.ObjectId,
      ref: "director",
      required: [true, 'The director is required.']
    },

    year: {
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


module.exports = mongoose.model('episodesTvShow', EpisodesTvShowSchema);
