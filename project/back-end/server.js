/**
 * Created by giulianogiannico on 13/05/16.
 */
// var express = require('express');
//
//
// var expressControllers = require('express-controller');
//
// //Your express-app
// var app = module.exports = express();
//
// //Tell expressControllers to use the controllers-directory, and use bind() to set up routing.
// expressControllers.setDirectory( __dirname + '/controllers').bind(app);
//
// app.use(express.static(__dirname + '/../front-end'));
//
//
// app.listen(9999);
//
// app.get('/', function(req, res){
//     res.redirect('/home.html');
// });

var express = require('express');
var app = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.use(require('./controllers'));
app.use(express.static(__dirname + '/../front-end'));

app.listen(9999);