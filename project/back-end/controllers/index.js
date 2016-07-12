/**
 * Created by g.giannico on 12/07/2016.
 */
var express = require('express');
var router = express.Router();


router.use('/giocatori', require('./GiocatoriController'));



// router.get('/', function(req, res){
//     res.redirect('/home.html');
// });



module.exports = router;