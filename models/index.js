var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  /*Entry.find({}, function(err, entries) {
		console.log(entries);
		if(err) {
			res.status(404).json({"error": "not found", "err":err});
			return;
		} else {
			res.render('database', {title: 'database', entries: entries});
		}
	});*/
});

/*router.get("/file/:id", function (req, res) {
 
	  var gridStore = gridfs.get(req.params.id);
 
	 if(gridStore) {
		 gridStore.open(function(err, gs){
			 res.header("Content-Type", gs.contentType);
			 res.header("X-Content-Type-Options", "nosniff");
			 res.header("Accept-Ranges", "bytes");
			 res.header("Content-Length", gs.length);
				// This is where the magic happens. 
				gs.stream(true).pipe(res);
			});
	 }
});

/*================================
BIT ==============================
exports.build = function(title, pagetitle, content) {
 return ['<!doctype html>',
  '<html lang="en">\n<head>\n<meta charset="utf-8">\n<title>{title}</title>',
  '<link rel="stylesheet" href="./public/style.css" />\n</head>',
  '<body><h1>{pagetitle}</h1>',
  '<div id="content">{content}</div>\n</body>\n</html>'
 ].join('\n')
 .replace(/\{title\}/g, title)
 .replace(/\{pagetitle\}/g, pagetitle)
 .replace(/\{content\}/g, content);
}*/
console.log("new code works");

module.exports = router;
