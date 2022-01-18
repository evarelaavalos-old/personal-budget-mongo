const mongoose = require('mongoose');

const typesSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    name: {
        type: String,
        required: true,
    },
})

module.exports = mongoose.model('Type', typesSchema);
