var Customer = mongoose.model('Customer');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');

module.exports = {

  index: function(req, res) {
      Order.find({}).populate('_customer').exec(function(err, orders) {
        if(err) {
          console.log(err);
          res.json(err);
        } else {
          res.json(orders);
          //console.log("index", customers);
          }
      });
    },
  create: function(req, res){
    console.log("order controller",req.body);
    var new_order = new Order(
                  _customer = req.body.customer,
                  _product  = req.body.product,
                   quantity = req.body.quantity
    )
    // new_order.save(function(err){
    //   if(err){
    //     res.json({status: false, message: "the order was not saved"});
    //   }else{
    //         Customer.findOne({_id: req.body.customer}, function(err, customer){
    //           console.log("customer foud", customer);
    //           customer._orders.push(new_order._id);
    //           customer.save(function(err){
    //             if(err) {res.json(err);
    //             }else {res.json({status: true});
    //               }
    //           })
    //         })
    //
    //         Product.findOne({_id: req.body.product}, function(err, product){
    //           console.log("product foud", product);
    //             var updated_qty = product.quantity - new_order.quantity;
    //             Product.findOneAndUpdate({_id: req.body.product}, {quantity: updated_qty}, function(err){
    //               if(err){
    //                 console.log("quantity did not update");
    //               } else {
    //                 console.log("product quantity updated successfully");
    //               }
    //             })
    //
    //         })
    //       }
    //     })

      }

}
