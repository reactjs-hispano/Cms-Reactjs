var AppDispatcher = require('../../dispatcher/AppDispatcher');
var Constants = require('../../constants/Constants');
var request = require("superagent");


var ActionTypes = Constants.ActionTypes;
var singular = "user";
var plural = "users";
var url ="/"+plural+"/";


module.exports = {

  get: function() {
        request.get(url).end(function(err, res){
          if(!err && res.body[plural].length){
              AppDispatcher.handleServerAction({
                type: ActionTypes.RECEIVE_RAW_USERS,
                rawItems: res.body[plural]
              });
          }
        });
  },
  create: function(item) {
    request
    .post(url)
    .query(item)
    .end(function(err, res){

    if(err) {
      console.log(err);
    }

    if(res.body.err){
      console.log(res.body.err);
    }else{
      AppDispatcher.handleViewAction({
        type: ActionTypes.SAVE_USER,
        item: res.body[singular]
      });
    }

    });

  },
  update: function(item){
    request
    .post(url)
    .query(item)
    .end(function(err, res){

      if(res.body.err){
        console.log(res.body.err)
      }else{
        AppDispatcher.handleViewAction({
          type: ActionTypes.SAVE_USER,
          item: item
        });
      }

    })
  },
  search: function(by,data){

    var sby = by;
    request
    .get(url+'search/'+sby+"/"+data)
    //.query({sby: sby, data: data})
    .end(function(err, res){
      if(err){
        console.log(err)
      }
      if(res.body.err){
        console.log(res.body.err)
      }else{

        AppDispatcher.handleViewAction({
          type: ActionTypes.RECEIVE_RAW_USERS,
          rawItems: res.body[plural]
        });
      }

    })
  },
  delete: function(itemID){
    request
    .del(url)
    .query({_id: itemID})
    .end(function(err, res){
      if(err) {
        console.log(err);
      }

      if(res.body.err){
        console.log(res.body.err)
      }else{
        AppDispatcher.handleViewAction({
          type: ActionTypes.DELETE_USER,
          _id: itemID
        });
      }

    })
  }

};
