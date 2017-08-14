const express = require('express'),
	mustacheExpress	= require('mustache-express'),
	logger = require('morgan'),
	bodyParser = require('body-parser'),
	cors = require('cors'),
	app	= express(),
	Auth = require('./services/auth'),
	PORT = process.env.PORT || 8080;

// 1. set up the view engines
app.set('view engine', 'html');
app.set('views', __dirname + '/views/');
app.use(express.static(__dirname + '/public/'));

// cross-origin requests will not work from react server to express
// server with out this
app.use(cors());

app.engine('html', mustacheExpress());

//logger to see whats going on
app.use(logger('dev'));

app.use(Auth.authenticate);



// 2. set body parser
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.use('/users', require('./controllers/users_controller'));
app.use('/login', require('./controllers/sessions_controller'));

// 3. connect controller
app.use('/api', require('./controllers/index'));

// 4. listen
app.listen(PORT, () => console.log('Server is listening on port: ', PORT));