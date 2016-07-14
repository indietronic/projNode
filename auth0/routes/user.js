var express = require('express');
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var router = express.Router();
var request = require('request');

/* GET user profile. */
router.get('/', ensureLoggedIn, function(req, res, next) {
  res.render('user', { user: req.user });


  request.post(
      'localhost:9999/',
      { form: { key: 'value' } },
      function (error, response, body) {
        if (!error && response.statusCode == 200) {
          console.log(body)
        }
      }
  );
});

module.exports = router;
