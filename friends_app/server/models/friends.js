//specifies the schema to be loaded by mongoose
//it is required by mongoose.js, which is required by server.js, so no need to require this in server.js

var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var path = require('path');

var FriendSchema = new mongoose.Schema({
  name: String,
  age: Number,
  //created_at: {type: Date, default: Date.now}
});



var Friend = mongoose.model('Friend', FriendSchema);


// MessageSchema.path('name').required(true, 'Name cannot be blank');
// MessageSchema.path('message_text').required(true, 'Message cannot be blank');
