var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var eventSchema = new Schema({
    description: String,
    location: String,
    title: String,
    date: Date,
    members: [String],
    owner: String,
});

module.exports = mongoose.model('event', eventSchema);
