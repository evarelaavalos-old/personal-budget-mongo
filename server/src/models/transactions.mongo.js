const mongoose = require('mongoose');

const transactionsSchema = new mongoose.Schema({
    id: {
        type: Number,
        required: true,
    },
    concept: {
        type: String,
        required: true,
    },
    date: {
        type: Date,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
    type: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model('Transaction', transactionsSchema);
