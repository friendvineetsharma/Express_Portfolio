// <!-- Name: Harshit Sharma
// Student#: 200333254
// Site address: https://harrykural-portfolio.herokuapp.com/
// Advanced Web Programming - Assignment 1  - Express Portfolio
// Description: This portfolio ebsite is made with extensive
// use of nodeJS and expressJS specialy the express generator
// which builds the file structure so you don't need to start from scratch
// -->

// express setup
let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
      {
        title: 'Harshit Sharma',
        message: 'Hey! Thanks for visiting the website. This portfolio is made with HTML, CSS, JQuery, Javascript, NodeJS, ExpressJS. Remember to checkout the website.'
      });
});

/* GET Projects page. */
router.get('/Projects', function(req, res, next) {
    res.render('Projects',
        {
            title: 'Projects'
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

// make this file public
module.exports = router;
