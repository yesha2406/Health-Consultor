const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const admin = new Schema({
    email: String,
    password: { type: String, select: false },
    createdAt: { type: Date, default: Date.now }
}, {
    collection: 'admin'
});

module.exports = mongoose.model('admin', admin);