var Customer = mongoose.model('Customer');
var Order = mongoose.model('Order');

module.exports = {

  index: function(req, res) {
      Order.find({}).populate('_customer').exec(function(err, customers) {
        if(err) {
          console.log(err);
          res.json(err);
        } else {
          res.json(orders);
          //console.log("index", customers);
          }
      });
    },

  


}
