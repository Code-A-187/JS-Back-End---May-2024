const mongoose = require('mongoose')

const castSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    age: {
        type: Number,
        required: true,
        max: 120,
        min: 5,
    },
    born: {
        type: String,
        required: true,
    },
    nameInMovie: {
        type: String,
        required: true,
    },
    castImageURL: {
        type: String,
        required: true,
        validate: {
            validator: function (v) {
                return /^https?:\/\//.test(v);
            },
            message: props => `${props.value} is not a valid URL`
            }

        },
    movie: [{type: mongoose.Schema.Types.ObjectId, ref: 'Movie'}]
})

const Cast = mongoose.model('Cast', castSchema);

module.exports = Cast;