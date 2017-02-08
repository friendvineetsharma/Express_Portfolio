var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
      {
        title: 'Portfolio',
        message: 'Portfolio of Harshit Sharma made with ExpressJS'
      });
});

module.exports = router;
