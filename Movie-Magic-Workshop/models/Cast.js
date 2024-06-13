const { Schema } = require('mongoose')

const castSchema = new Schema({
    name: {
        type: String,
        required: true,
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
        castImage: {
            type: String,
            required: true,
            validate: {
                validator: function (v) {
                    return /^https?:\/\//.test(v);
                },
                message: props => `${props.value} is not a valid URL`
            }

        },
        movie: [{type: Schema.Types.ObjectId, ref: 'Movie'}]
    }
}
})

const Cast = mongoose.model('Cast', castSchema);

module.exports = Cast;