const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const cors = require('cors');
const config = require('./config.js')
const massive = require('massive');


var app = module.exports = express();
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



var conn = massive.connectSync({
  connectionString: config.connectionString
});
app.set('db', conn);
var db = app.get('db');


const feedCtrl = require('./feedCtrl.js');
const profileCtrl = require('./profileCtrl.js');



//SIGN UP (CREATE NEW ACCOUNT)
app.post('/profile/', profileCtrl.createUser);

//AUTHENTICATION (LOGIN)

//CHANGE PASSWORD (CHANGE EMAIL?)



//RETRIEVE USER ACCOUNT
app.get('/profile/:id', profileCtrl.getUser);



//UPDATE USER INFORMATION
app.put('/profile/:id', profileCtrl.updateUser);

//DELETE ACCOUNT
app.delete('/profile/:id', profileCtrl.deleteUser);



//RETRIEVE THE FEED
app.put('/feed/:id', feedCtrl.updateCoordsAndGetFeed);









app.listen(port, function () {
  console.log('LISTENING..........' + port);
})
