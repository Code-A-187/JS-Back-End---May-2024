const { Schema, model, Types } = require('mongoose');

// TODO add/change properties depending on exam desctiption
const dataSchema = new Schema ({
    make: {
        type: String,
        required: true,
    },
    model: {
        type: String,
        required: true,
    },
    year: {
        type: Number,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    price: {
        type: Number,
        required: true,
    },
    img: {
        type: String,
        required: true,
    },
    material: {
        type: String,
    },
    owner: {
        type: Types.ObjectId,
        res: 'User'
    }
})

const Furniture = model('Furniture', dataSchema);

module.exports = { Furniture };