const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const message = new Schema({
    message: String,
    sender: { type: Schema.Types.ObjectId, ref: 'user' },
    receiver: { type: Schema.Types.ObjectId, ref: 'user' },
    createdAt: { type: Date, default: Date.now }
}, {
    collection: 'message'
});

module.exports = mongoose.model('message', message);