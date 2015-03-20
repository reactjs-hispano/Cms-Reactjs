var AppDispatcher = require('../../dispatcher/AppDispatcher');
var Constants = require('../../constants/Constants');;

var ActionTypes = Constants.ActionTypes;

module.exports = {

	select: function(itemID) {
	    AppDispatcher.handleViewAction({
	      type: ActionTypes.CLICK_USER,
	      _id: itemID
	    });
	},
	edit: function() {
	    AppDispatcher.handleViewAction({
	      type: ActionTypes.EDIT_USER,
	    });
	},	
	new: function() {
	    AppDispatcher.handleViewAction({
	      type: ActionTypes.NEW_USER,
	    });
	},
	cancel: function() {
	    AppDispatcher.handleViewAction({
	      type: ActionTypes.CANCEL_USER,
	      	      
	    });
	},


};