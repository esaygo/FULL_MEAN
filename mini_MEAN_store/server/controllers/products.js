var Product = mongoose.model('Product');

module.exports = {

  index: function(req, res) {
      Product.find({}, function(err, products) {
        if(err) {
          console.log(err);
          res.json(err);
        } else {
          res.json(products);
          //console.log("index", products);
          }
      });
    },
  create: function(req, res) {
    console.log("product", req.body);
    var new_product = new Product(req.body);
      new_product.save(function(err) {
        if(err) {
          console.log("an error occured");
          res.json(err);
        } else {
          console.log("saved successfully to db");
          //res.json({success: true});
          res.redirect('/products');
        }

      });
  }

  }
