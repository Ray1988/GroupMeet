var express = require('express');
var eventController = require('../controllers/eventController');

var router = express.Router();

/* GET events listing. */
router.get('/', eventController.event_list);

router.post('/event/create', eventController.event_create);

router.get('/event/:id/details', eventController.event_detail);

module.exports = router;
