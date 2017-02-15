var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');

// for contact form
var nodemailer = require('nodemailer');

var index = require('./routes/index');
var users = require('./routes/users');

var app = express();

// contact form POST data
app.post('/ContactMe', function (req, res) {

    // for robots
    if (req.body.company)
    {
      res.render('ContactMe',
      {
          title: 'Contact Me',
          err: true,
          page: 'ContactMe',
          type: 'empty',
          body: req.body.message,
          name: req.body.name,
          email: req.body.email,
          msg: 'Robot Detected.',
          description: 'spam'
      });
        return;
    }

    // required fields are filled
    if (! req.body.name || ! req.body.email || ! req.body.message)
    {
        res.render('ContactMe',
            {
                title: 'Contact Me',
                err: true,
                page: 'ContactMe',
                type: 'empty',
                body: req.body.message,
                name: req.body.name,
                email: req.body.email,
                msg: 'Thank you.',
                description: 'Email successfully sent.'
            });
        return;
    }

    // valid email address
    let email_check = validate(req.body.email);

    if (email_check == false)
    {
        res.render('ContactMe',
            {
                title: 'Contact Me',
                err: true,
                page: 'ContactMe',
                type: 'empty',
                body: req.body.message,
                name: req.body.name,
                email: req.body.email,
                msg: 'Enter a valid email.',
                description: 'Email successfully sent.'
            });
        return;
    }

    // set mailing address
    let mailOpts, smtpTrans;

    // nodemailer
    smtpTrans = nodemailer.createTransport({
      service: 'Gmail',
        auth: {
            user: "bsp42333@gmail.com",
            pass: "003334287hs"
        }
    });

    mailOpts = {
        from: req.body.name + '&lt;' + req.body.email + '&gt;',
        to: 'bsp42333@gmail.com',
        subject: 'Portfolio contact',
        text: req.body.message + ' || NAME:' + req.body.name + ' || EMAIL:' + req.body.email
    };

    smtpTrans.sendMail(mailOpts, function (error, info) {

      // not sent
        if (error)
        {
          res.render('ContactMe',
              {
                  title: 'Contact Me',
                  page: 'ContactMe',
                  type: 'error',
                  description: 'email not sent'
              });
        }
        else
        {
            res.render('ContactMe',
                {
                    title: 'Contact Me',
                    page: 'ContactMe',
                    type: 'success',
                    description: 'email successfully sent'
                });
        }

        
    });

});

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', index);
app.use('/users', users);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
