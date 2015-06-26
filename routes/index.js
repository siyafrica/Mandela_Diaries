var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Entry = mongoose.model('Entry');
var moment = require('moment');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('/', { title: 'Express' });
  Entry.find({}, function(err, entries) {
		console.log(entries);
		if(err) {
			res.status(404).json({"error": "not found", "err":err});
			return;
		} else {
			res.render('/', {title: 'database', entries: JSON.stringfy(entries)});
		}
	});
});

console.log("new code works");

module.exports = router;
