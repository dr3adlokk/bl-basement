const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const passport = require('passport');
// const path = require('path'); 
const PORT = process.env.PORT || 3001;
const app = express();
// var app = express.Router();
// var Band = require('./models/Band.js');
var logger = require('morgan')


//debug and json parsing 
app.use(logger('dev'));
app.use(bodyParser.urlencoded({
  extended: false
}));

// Serve Static content
app.use(express.static(process.cwd() + './client/public/index.html'));

// //datase config local and remote
// if (process.env.NODE_ENV == 'production') {

// } else {
//   mongoose.connect('mongodb://localhost/project3')
// }
 mongoose.connect('mongodb://localhost/project3')

var db = mongoose.connection;

//mongoose connection errors 
db.once('error', (err)=> {
  console.log('Mongoose Error: ', err);
});

//mongoose connection success 
db.once('open', ()=> {
  console.log('Mongoose Connection successful at ');
})

//importing the model for the articles 
// var Band = require('./models/Band.js');

// the controller for the routes 
var router = require('./controller/index-render-test.js');
app.use('/', router);

app.listen(PORT, ()=> {
  console.log('App Served to local host at port ' + PORT);
});