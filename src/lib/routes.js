var usersCtrl = require("../controllers/usersCtrl"),
router        = require('express').Router();


router.get("/",function(req,res){
 res.render("index");
})
.get("/users/",usersCtrl.index)
.post("/users/",usersCtrl.new)
.delete("/users/:id?",usersCtrl.delete)
.put("/users/:id?",usersCtrl.update)
.get("/users/search/:by/:data",usersCtrl.search);

module.exports = router;
