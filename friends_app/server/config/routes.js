//specifies which routes will be handled by which controllers

var friends = require('../controllers/friends.js');

module.exports = function(app) {

  app.get('/friends', function (req,res) {
    friends.show(req,res);
  });
  app.post('/addFriend', function(req,res){
    friends.create(req,res);
  });
  app.delete('/deleteFriend/:id', function(req, res) {
    friends.delete(req, res);
  })
}
