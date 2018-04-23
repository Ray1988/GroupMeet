var events = require('../models/eventsModel');

exports.event_list = function(req, res) {
    var query = events.find();
  
    query.exec(function(err, result) {
        if (err) {
            res.send( 'something went wrong' + err );
        }

        res.send(result);     
    });
};

exports.event_detail = function (req, res) {
    res.send('Not implemented: ' + req.params.id);
};

exports.event_create = function (req, res) {
    res.send('Create a new event');
};

exports.event_update = function (req, res) {
    res.send('Update a event');
};
