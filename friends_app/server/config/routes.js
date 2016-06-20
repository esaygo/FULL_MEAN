//specifies which routes will be handled by which controllers

var mongoose = require('mongoose');

var friends = require('../controllers/friends.js');

module.exports = function(app) {

  app.get('/friends', function (req,res) {
    friends.index(req,res);
  });
  app.post('/friends', function(req,res){
    friends.create(req,res);
  });

}
