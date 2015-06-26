var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Entry = mongoose.model('Entry');

//The route for getting data for the database - GET form
router.get("/", function(req, res) {
  //Send the current entries to the page
  Entry.find({}, function(err, entries) {
    console.log(entries);
    if(err) {
      res.status(404).json({"error": "not found", "err":err});
      return;
    } else {
      res.render('database', {title: 'database', entries: entries});
    }
  });

});

//The route for posting data to the database - POST
router.post('/', function(req, res) {
  var newEntry = new Entry(req.body);
  newEntry.save(function(err, entries){
    if (err !== null) {
      res.status(500).json(err);
    } else {
      res.redirect('database');
    };
  });
});

//The route for deleting data to the database - Delete/remove todo item by its id
// Changed path from `/` to `/:id`
    router.delete('/:id', function (req, res) {
        Entry.findById(req.params.id)
            .exec(function(err, entries) {
               // changed `if (err || !doc)` to `if (err || !entries)`
                if (err || !entries) {
                    res.statusCode = 404;
                    res.send({});
                } else {
                    entries.remove(function(err) {
                        if (err) {
                            res.statusCode = 403;
                            res.send(err);
                        } else {
                            res.send('Deleted entry with link: ', entries.link);
                        }
                    });
                }
            });
    });

module.exports = router;