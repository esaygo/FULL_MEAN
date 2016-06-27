//specifies which routes will be handled by which controllers

var friends = require('../controllers/friends.js');

module.exports = function(app) {
  app.post('/logReg', friends.login);

  app.get('/friends', friends.show);

  app.post('/friends', friends.create);

  app.post('/friends/:id', friends.delete);

  app.post('/friends/:id/edit', friends.update);


}
