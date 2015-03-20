var React = require('react');

var usersStore = require('../../stores/UsersStore');
var viewActor = require('../../actions/users/UsersViewActors');
var serverActor = require('../../actions/users/UsersServerActors');

var UsersItem = require('./UsersItem.react')
var UsersSearch = require('./UsersSearch.react')
var UsersNew = require('./UsersNew.react')
var UsersEdit = require('./UsersEdit.react')

function getState() {
  return {
  		current: usersStore.getCurrent(),
  		users: usersStore.getAllChrono(),
  		action:	usersStore.getAction()   		
  };
}

module.exports =  React.createClass({
	getInitialState:function(){
		return getState();
	},
	componentDidMount: function() {
    	usersStore.addChangeListener(this._onChange);	
    	serverActor.get();
  	},
	componentWillUnmount: function() {
		usersStore.removeChangeListener(this._onChange);
	},
	_new:function(){
		console.log("new")
		viewActor.new();
	},
	_edit:function(){
		viewActor.edit();
	},
	_cancel:function(){
		viewActor.cancel();
	},
	_delete:function(){
		serverActor.delete(this.state.current._id);
	},
  	_onChange: function() {
  		this.setState(getState());
  	},
  	render: function() {
  		
  		var users = this.state.users.map(function(user){
	  			return(
	  					<UsersItem 
	  					key={user._id}
	  					current = {user._id == this.state.current._id} 
	  					user={user} />
	  				)
	  			},this);
  		 

	    return (
	      <div className="UsersSection">
	      		<div className="UsersSectionMenu">
	      			{this.state.action == "isListing"?<input type="submit" value="new" onClick={this._new} />:null}
	      			{this.state.action == "isListing"?<input type="submit" value="edit" onClick={this._edit} />:null}
	      			{this.state.action == "isListing"?<input type="submit" value="delete" onClick={this._delete} />:null}
	      			{this.state.action != "isListing"?<input type="submit" value="cancel" onClick={this._cancel} />:null}
	      			
	      		</div>
	      		{this.state.action=="isCreating"?<UsersNew /> : null}
	      		{this.state.action=="isEditing"?<UsersEdit user={this.state.current} />:null}
	      		{this.state.action=="isListing"?<UsersSearch />:null}
	      		{this.state.action=="isListing"?<div className="UsersFeed">{users}</div>:null}
	      		
	      </div>
	    );
  	},


});
