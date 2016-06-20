//controls all the server-side logic and is called upon by the routes
//interacts with preloaded models
//sends response to client

var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
var bodyParser = require('body-parser');

module.exports = (function(){
  return {
    //index in the factory is calling the index method(server side)
    index: function(req, res) {
      Friend.find({}, function(err, results) {
        if(err) {
          console.log(err);
        } else {
          res.json(results);
          console.log(results);
          }
      })
    },
    create: function(req,res) {
      console.log("to save to db", req.body);
      var friend = new Friend({
              name: req.body.name,
              age: req.body.age
            });
      friend.save(function(err) {
        if(err) {
          console.log("an error occured");
        } else {
          console.log("saved successfully to db");
        }
        res.redirect('/');
      });
    }

  }
})();
