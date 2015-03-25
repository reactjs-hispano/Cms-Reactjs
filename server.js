var http      = require("http"),
  app       = require("./config/express"),
  db        = require("./config/mongoose");

/*
  @create server
*/
var server  = http.createServer(app);
server.listen(app.get('port'), function () {
  console.log('Express server listening on port: \t'+app.get('port'));
});

