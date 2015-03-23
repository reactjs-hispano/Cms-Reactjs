
var path = require('path'),
    util = require('util'),
    serveStatic = require('serve-static'),
    bodyParser = require('body-parser'),
    // methodOverride = require('method-override')
    express = require('express'),
    app = express();

app.engine('jade', require('jade').__express);

app.set('port', process.env.PORT || 3000);
app.set('views', './src/views');
app.set('view engine', 'jade');

app.use(serveStatic(path.join('./public'), { maxAge: 86400000 }));
// app.use(methodOverride())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

module.exports = app;
