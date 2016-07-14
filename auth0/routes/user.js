var express = require('express');
var passport = require('passport');
var ensureLoggedIn = require('connect-ensure-login').ensureLoggedIn();
var router = express.Router();
var CacheManager = require('../../project/back-end/cache/CacheManager');

/* GET user profile. */
router.get('/', ensureLoggedIn, function(req, res, next) {
    var global = CacheManager.getGlobal();
    console.log(global);


  res.render('user', { user: req.user });
});

module.exports = router;
