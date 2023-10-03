
// express setup
let express = require('express');
let router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index',
      {
        title: 'Vineet Sharma',
        message: '✋I am Vineet Sharma, I a m an enthusiast ArtificiaL Intelligence 🌐developer. I am in 1st yr Software Engineering Technology - AI 👨‍🎓 in Centennial College. You can 📲 me through discord or ✉️'
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

router.get('/Services', function(req, res, next) {
    res.render('Services',
        {
            title: 'Services'
        });
});

// make this file public
module.exports = router;
