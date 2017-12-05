var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendfile(__dirname + '/tableau.html');
});

module.exports = router;
