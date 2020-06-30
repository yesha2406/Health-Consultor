const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const user = new Schema({
    firstname: String,
    lastname: String,
    email: String,
    password: { type: String, select: false },
    type: { type: Schema.Types.ObjectId, ref: 'userType' },
    createdAt: { type: Date, default: Date.now }
}, {
    collection: 'user'
});

module.exports = mongoose.model('user', user);