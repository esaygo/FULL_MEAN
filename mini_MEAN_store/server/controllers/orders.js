var Customer = mongoose.model('Customer');
var Order = mongoose.model('Order');
var Product = mongoose.model('Product');

module.exports = {

  index: function(req, res) {
      Order.find({}).populate('_customer _product').exec(function(err, orders) {
        if(err) {
          console.log(err);
          res.json({status: false, message: "the order was not found"});
        } else {
          // console.log("index orders", orders);
          res.json(orders);
          }
      });
    },
  create: function(req, res){
    console.log("order controller",req.body);
    var new_order = new Order(req.body);
    //               _customer = req.body.customer,
    //               _product  = req.body.product,
    //                quantity = req.body.quantity
    // )
    new_order.save(function(err){
      if(err){
        res.json({status: false, message: "the order was not saved"});
      }else{
            // Customer.findOne({_id: req.body._customer}, function(err, customer){
            //   if(err){
            //     console.log(err);
            //   }else{
            //       console.log("customer foud", customer);
            //       customer.orders.push(new_order._id);
            //       customer.save(function(err){
            //         if(err) {res.json(err);
            //         }else {res.json({status: true});
            //           }
            //       })
            //     }
            //   })

            Product.findOne({_id: req.body._product}, function(err, product){
              console.log("product found", product);
                var updated_qty = product.quantity - new_order.quantity;
                if(updated_qty >= 0) {
                    Product.findByIdAndUpdate({_id: req.body._product}, {$set: {quantity: updated_qty}}, function(err, product){
                      if(err){
                        console.log("quantity did not update");
                      } else {
                        console.log("product quantity updated successfully", product);
                        // res.redirect('/orders');
                      }
                    })
                    Customer.findOne({_id: req.body._customer}, function(err, customer){
                      if(err){
                        console.log(err);
                      }else{
                          console.log("customer foud", customer);
                          customer.orders.push(new_order._id);
                          customer.save(function(err){
                            if(err) {res.json(err);
                            }else {res.json({status: true});
                              }
                          })
                        }
                      })  
                }else{
                  res.json({status: false, message: "Out of stock"});
                }
            })

          }
        })

        // module.exports.index(req.res);

      }

}
