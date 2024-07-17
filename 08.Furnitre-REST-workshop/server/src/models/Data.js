const { Schema, model, Types } = require('mongoose');

// TODO add/change properties depending on exam desctiption
const dataSchema = new Schema ({
    prop: {
        type: String,
        required: true,
    },
    owner: {
        type: Types.ObjectId,
        res: 'User'
    }
})

const Data = model('Data', dataSchema);

module.exports = { Data };