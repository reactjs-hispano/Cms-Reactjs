var React = require('react');

var viewActor = require('../../actions/users/UsersViewActors');


module.exports =  React.createClass({
	onClick: function(){
		viewActor.select(this.props.user._id);
	},
  	render: function() {
  		var body = <div className="body">
	      			{this.props.user.email}
	      		</div>

	    return (
	      <div className="UserItemList" onClick={this.onClick}>
	      		<div className="head">
					<h3>{this.props.user.username}</h3>
	      		</div>
	      		{this.props.current?body:null}
	      		
	      </div>
	    );
  	},


});
