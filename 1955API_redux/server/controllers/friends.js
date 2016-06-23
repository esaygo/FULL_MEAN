
var mongoose = require('mongoose');
var Friend = mongoose.model('Friend');
//var mongodb = require('mongodb');


module.exports = (function(){
  return {
    //index in the factory is calling the index method(server side)
    show: function(req, res) {
      Friend.find({}, function(err, results) {
        if(err) {
          console.log(err);
          res.json(err);
        } else {
          res.json(results);
          console.log("show", results);
          }
      })
    },
    create: function(req,res) {
      //console.log("to save to db", req.body);
      var new_friend = new Friend(req.body);
      new_friend.save(function(err) {
        if(err) {
          console.log("an error occured");
          res.json(err);
        } else {
          console.log("saved successfully to db");
          //res.json({success: true});
          res.redirect('/friends');
        }

      });
    },

    delete: function(req,res) {
      console.log("record to delete", req.params.id);

      Friend.remove({_id: req.params.id}, function(err){
        if(err){
          console.log("error deleting record");
          res.json(err);
        }else{
          //res.json({success: true});
          console.log("successfully deleted");
          res.redirect('/');
        }

      });
    }

  }
})();
