var AppDispatcher = require('../dispatcher/AppDispatcher');
var Constants = require('../constants/Constants');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = Constants.ActionTypes;
var CHANGE_EVENT = 'change';

var _currentID = null;
var _action = "isListing";
var _users = {};

var usersStore =  assign({}, EventEmitter.prototype, {

  init: function(rawItems) {
    _action = "isListing"; 
    _users = {};
    rawItems.forEach(function(item) {
      _users[item._id] = {
        _id:      item._id,
        username:     item.username,
        email:     item.email,
      };
    }, this);
    if(!_currentID){
    var allChrono = this.getAllChrono();
      _currentID = allChrono[0]._id;
    }
  },
  computeCurrent:function(){    
      var allChrono = this.getAllChrono();
      _currentID = allChrono[0]._id;
      console.log(_currentID)
  },
  get: function(id) {
    return _users[id];
  },
  getAll: function() {
    return _users;
  },
  getAllChrono: function() {
      var ordered = [];
    for (var id in _users) {
      var item = _users[id];
      ordered.push(item);
    }
    return ordered;
  },
  getCurrentID: function() {
    return _currentID;
  },

  getCurrent: function() {
    return this.get(this.getCurrentID());
  },
  getAction: function(){
    return _action;
  },


  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },
  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },
  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  }

});

usersStore.dispatchToken = AppDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {

    case ActionTypes.RECEIVE_RAW_USERS:
      usersStore.init(action.rawItems);
      usersStore.emitChange();
      break;
    case ActionTypes.LIST_USERS:
       _action = "isListing"
      usersStore.emitChange();
      break;
    case ActionTypes.CLICK_USER:
      _action = "isListing"
      _currentID = action._id;
      usersStore.emitChange();
      break;
    case ActionTypes.EDIT_USER:
      _action = "isEditing";
      usersStore.emitChange();
      break;
     case ActionTypes.NEW_USER:
      _action = "isCreating";
      usersStore.emitChange();
      break;
    case ActionTypes.SAVE_USER:
     console.log(action.item)
      if(!_currentID){
        _currentID = action.item._id;
      }
      _users[action.item._id] = action.item;
      _action = "isListing";    
      usersStore.emitChange();
      break;
    case ActionTypes.DELETE_USER:
      delete _users[action._id];
      usersStore.computeCurrent();
      usersStore.emitChange();
      break;
    case ActionTypes.CANCEL_USER:
      _action= "isListing";
      usersStore.emitChange();
      break;
    default:
      // do nothing
  }

});

module.exports = usersStore;
