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

/* GET Projects page. */
router.get('/Projects', function(req, res, next) {
    res.render('Projects',
        {
            title: 'Projects'
        });
});

/* GET Services page. */
router.get('/Services', function(req, res, next) {
    res.render('Services',
        {
            title: 'Services'
        });
});

/* GET AboutMe page. */
router.get('/AboutMe', function(req, res, next) {
    res.render('AboutMe',
        {
            title: 'About Me'
        });
});

/* GET ContactMe page. */
router.get('/ContactMe', function(req, res, next) {
    res.render('ContactMe',
        {
            title: 'Contact Me'
        });
});

module.exports = router;
