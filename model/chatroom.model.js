const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const chatroom = new Schema({
    name: String,
}, {
    collection: 'chatroom'
});

module.exports = mongoose.model('chatroom', chatroom);