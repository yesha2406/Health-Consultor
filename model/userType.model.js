const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userType = new Schema({
    type: String,
}, {
    collection: 'userType'
});

module.exports = mongoose.model('userType', userType);