var express = require('express');
var eventController = require('../controllers/eventController');

var router = express.Router();

/* GET events listing. */
router.get('/', eventController.event_list);

router.post('/event/create', function (req, res, next) {

  var event = {
    dateTime: req.body.datatime,
    description: req.body.description,
    location: req.body.location,
    members: req.body.members,
    owner: req.body.owner,
    title: req.body.title,
  };

  res.render('eventSaved', event);

});

router.get('/event/:id/details', eventController.event_detail);

module.exports = router;
