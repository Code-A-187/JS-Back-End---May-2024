const mongoose = require('mongoose')

const movieSchema = new mongoose.Schema ({
    title: {
        type: String,
        required: true,
    },
    genre: {
        type: String,
        required: true,
    },
    director: {
        type: String,
        required: true,
    },
    year: {
        type: Number, 
        required: true, 
        max: 2030,
        min: 1900,
    },
    rating: {
        type: Number,
        required: true,
        max: 5,
        min: 1,
    },
    description: {
        type: String,
        required: true,
        maxLength: 2000,
    },
    imageURL: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^https?:\/\//.test(v);
            },
            message: props => `${props.value} is not a valid URL`
        },
        cast: [{type: mongoose.Schema.Types.ObjectId, ref: 'Cast'}],
    }
});

const Movie = mongoose.model('Movie', movieSchema);

module.exports = Movie;
