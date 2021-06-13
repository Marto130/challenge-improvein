const mongoose = require('mongoose');

let Schema = mongoose.Schema;

const TvShowSchema = new Schema({

    title: {
      type: String,
      required: [true, 'The Tv Show title is required.']
    },

    totalSeasons: {
      type: Number,
      required: [true, 'The Tv Show total seasons is required.'],
    },

    totalEpisodes: {
      type: Number,
      required: [true, 'The Tv Show total episodes is required.'],
    },

    releaseYear: {
        type: String,
    },

    genre: {
        type: [],
        required: [true, 'The Tv Show genre is required']
    },

    originalLanguaje: {
      type: String,
    },

    synopsis: {
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


module.exports = mongoose.model('tvShow', TvShowSchema);
