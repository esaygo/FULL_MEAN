
//the home base of the project:
        // - where we require the routes and the mongoose config
        // - crates the express application, loads config into it and listen

mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');

//app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "./client/static")));

require('./server/config/mongoose.js');
routes = require("./server/config/routes.js")(app);

server = app.listen(8000, function() {
  console.log("listening on port 8000");
});
