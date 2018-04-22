let express = require('express');
let app = express();
let bodyParser  = require('body-parser');
let mongoose = require('mongoose');
const db = require('./config/db');
console.log(db);
let port = process.env.port || 3000;

mongoose.connect(db.url);

app.use(bodyParser.json()); 
app.use(bodyParser.json({ type: 'application/vnd.api+json' }));
app.use(bodyParser.urlencoded({ extended: true })); 


app.use(express.static(__dirname + '/src/dist'));
// cors
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
  
// routes 
require('./routes/routes')(app); // configure our routes

// start app
app.listen(port);               

// shoutout to the user                     
console.log('Server is listening on: ' + port);

// export app         
exports = module.exports = app;
