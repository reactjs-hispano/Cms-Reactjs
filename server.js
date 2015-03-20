var http = require("http")
,	app = require("./config/express")
, 	server = http.createServer(app)
,   db = require("./config/mongoose")
,	usersCtrl = require("./src/controllers/usersCtrl")
;
   


app.get("",function(req,res){
	res.render("index");
});

app.get("/users/list",usersCtrl.index);
//app.get("/users/search/:by/:data",usersCtrl.search);
app.post("/users/new",usersCtrl.new);
app.post("/users/delete",usersCtrl.delete);
app.post("/users/update",usersCtrl.update);
app.get("/users/search/:by/:data",usersCtrl.search);


server.listen(3000, function () {
  console.log('Express server listening on port 3000');
});

