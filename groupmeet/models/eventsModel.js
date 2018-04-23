var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var eventsSchema = new Schema({
    description: String,
    location: String,
    title: String,
});

module.exports = mongoose.model('events', eventsSchema);
