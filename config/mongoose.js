var dbURI = 'mongodb://127.0.0.1/cms';
var mongoose = require("mongoose"); 
  

  
    mongoose.connect(dbURI); 
  
mongoose.connection.on('connected', function () { 
  
  console.log('Mongoose default connection open to ' + dbURI); 
  
}); 
  
// If the connection throws an error 
  
mongoose.connection.on('error',function (err) { 
  
  console.log('Mongoose default connection error: ' + err); 
  
}); 
  
// When the connection is disconnected 
mongoose.connection.on('reconnect', function () { 
  console.log('Mongoose Reconected'+ date()); 
}); 
mongoose.connection.on('disconnected', function () { 
  
  console.log('Mongoodb disconnected...trying to reconnect '+ new Date()); 
  mongoose.connect(dbURI); 
}); 
  
  
module.exports = mongoose;