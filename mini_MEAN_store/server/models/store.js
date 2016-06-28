//it is required by mongoose.js, which is required by server.js, so no need to require this in server.js

var Schema = mongoose.Schema;
var path = require('path');

var CustomerSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength:3, maxlength:100},
  orders: [{type: Schema.Types.ObjectId, ref: 'Order'}],
  created_at: {type: Date, default: Date.now}
});

var ProductSchema = new mongoose.Schema({
  name: {type: String, required: true, minlength: 2, maxlength: 100},
  image: {type: String, required: true},
  desc: {type: String, required: true, maxlength:256},
  quantity: {type: Number, required: true},
  created_at: {type: Date, default: Date.now}
});

var OrderSchema = new mongoose.Schema({
  _customer: {type: Schema.Types.ObjectId, ref: 'Customer'},
  product: {type: String, required: true},
  quantity: {type: Number, required: true},
  created_at: {type: Date, default: Date.now}
});

mongoose.model('Customer', CustomerSchema);
mongoose.model('Product', ProductSchema);
mongoose.model('Order', OrderSchema);

//CustomerSchema.path('name').required(true, 'Name cannot be blank');
