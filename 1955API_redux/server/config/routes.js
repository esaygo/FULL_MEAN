//specifies which routes will be handled by which controllers

var friends = require('../controllers/friends.js');

module.exports = function(app) {

  app.get('/friends', friends.show);
  
  app.post('/friends', friends.create);

  app.post('/friends/:id', friends.delete);

}
