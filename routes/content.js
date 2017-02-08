/**
 * Created by Harshit Sharma on 07-Feb-2017.
 */
// express setup
let express = require('express');
let router = express.Router();

/* GET content main page */
router.get('/', function (req, res, next) {
    res.render('content/index')
});

// make this file public
module.exports = router;
