    express     = require('express'),
    http        = require('http'),
    app 		    = express(),
    session 		= require('express-session'),
    FileStore   = require('session-file-store')(session),
    bodyParser  = require('body-parser'),
    exphbs      = require('express-handlebars'),
		fs					= require('fs'),
		path			  = require('path'),
		cors				= require('cors'),
		multer			= require('multer'),

    // database requirements
		MongoClient = require('mongodb'),
		monk				= require('monk'),
		url 				= 'localhost:27017/wedding',
		db			 		= monk(url),

    server      = http.Server(app);

// set application variables
app.use( cors() );
app.use( bodyParser.json() );
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + '/public'));
app.use(session({
	secret: 'heeel moeilijk wachtwoord', // CHANGE THIS!!!
  store: new FileStore(),
  saveUninitialized: true,
  resave: false
}));

var hbs = exphbs.create({
	// Specify helpers which are only registered on this instance.
	defaultLayout: 'main',
	helpers: {
		ifEqual: function (var1, var2) {
			if (var1 == var2) {
				return true;
			} else {
				return false;
			}
		},
		lower: function (var1, var2) {
			if ( var1 < var2 ) {
				return true;
			} else {
				return false;
			}
		}
	}
});

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

server.listen(8080, () => console.log('listening on *:8080'));


var routes = require('./routes/routes');
app.use('/', routes);



// log switch! //
var LogEnabled = true;
if (LogEnabled !== true) {
    console.log = function() {};
}
/////////////////
