var event = require('../models/eventModel');

exports.event_list = function(req, res) {
    var query = event.find();
  
    query.exec(function(err, result) {
        if (err) {
            res.send( 'something went wrong' + err );
        }

        res.send(result);     
    });
};

exports.event_detail = function (req, res) {
   var id = req.param('id');
   var query = event.findById(id);
   query.exec(function(err,result){
       if(err) {
           res.send('someting went wrong when retriving event: ' + id );
       }

       res.send(result);
   })
};

exports.event_create = function (req, res) {
    var title = req.body.title;
    var description = req.body.description;
    var location = req.body.location;
    var date = req.body.date;
    var memebers = req.body.memebers || [];
    var owner = req.body.creater;

    console.log(req.body);

    var newEvent = new event({
        title: title,
        description: description,
        location: location,
        date: date,
        memebers: memebers,
        owner: owner,
    });

    newEvent.save(function(error){
        if(error) return handleError(error);
        console.log("Event:" + title + "saved");
    })
};

exports.event_update = function (req, res) {
    res.send('Update a event');
};
