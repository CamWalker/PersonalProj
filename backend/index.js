const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const config = require('./config.js')
const feedCtrl = require('./feedCtrl.js')
const profileCtrl = require('./profileCtrl.js')


var app = express();
const corsOptions = {
	origin: 'http://localhost:8080'
};
const port = 8080
app.use(bodyParser.json());
app.use(cors(corsOptions));
app.use(session({
	resave: true,
	saveUninitialized: true,
	secret: config.secret
}));

//retrieve the feed
app.put('/feed', profileCtrl.updateCoords, feedCtrl.getFeed)

//update data
// app.put('/profile')







app.listen(port, function () {
  console.log('LISTENING..........');
})
