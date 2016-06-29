var Customer = mongoose.model('Customer');

module.exports = {

  index: function(req, res) {
      Customer.find({}).populate('orders').exec(function(err, customers) {
        if(err) {
          console.log(err);
          res.json(err);
        } else {
          res.json(customers);
          //console.log("index", customers);
          }
      });
    },

  create: function(req, res) {
    console.log("post data", req.body.name);

  Customer.find({name: req.body.name}, function (err, results) {
        //console.log("results", results);
    if(results[0] === undefined || results[0].length == 0){
      var customer = new Customer(req.body);
        customer.save(function(err) {
          if(err) {
            console.log(err);
            res.json(err);
          } else {
            console.log('successfully added a customer!');
            res.redirect('/customers');
          }
        });
      } else {
        res.json({status:false, message:'customer already exists'})
        //res.redirect('/customers');
      }
    });

  },

  delete: function(req, res){
    //console.log("to dlete",req.params.id);
    Customer.remove({_id: req.params.id}, function(err){
        if(err){
          console.log("error deleting record");
          res.json(err);
        }else{
          //res.json({success: true});
          console.log("successfully deleted");
          res.redirect('/customers');
        }
      });
  }

  
}
