var express = require('express'),
  app = express(),
  port = process.env.PORT || 3000,
  mongoose = require('mongoose'),
  Order = require('./api/models/matchingEngineModel'),
  bodyParser = require('body-parser');

mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/matchingdb');

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

var routes = require('./api/routes/matchingEngineRoutes'); //importing route
routes(app); //register the route

app.listen(port);

console.log('matching engine RESTful API server started on: ' + port);
