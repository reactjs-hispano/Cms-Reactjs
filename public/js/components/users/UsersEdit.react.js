var React = require('react');
var ServerActor = require('../../actions/users/UsersServerActors');

module.exports =  React.createClass({
	getInitialState:function(){
		return {
			username:"",
			email: ""
			
		}
	},
	handleChange: function(event){
		this.setState({
			username: this.refs.username.getDOMNode().value,
			email: this.refs.email.getDOMNode().value
		});
	},
	handleSubmit: function(e){
		e.preventDefault();
		var user = {
			username: this.state.username,
			email: 	  this.state.email,
			_id: 	  this.props.user._id
		}
		ServerActor.update(user);
	},
  	render: function() {
	    return (
	      <div className="UsersEdit">
	      		<form onSubmit={this.handleSubmit}>
		      		<input type="text" ref="username" defaultValue={this.props.user.username} onChange={this.handleChange} />
		      		<input type="text" ref="email" defaultValue={this.props.user.email} onChange={this.handleChange} />
		      		<input type="submit" />
	      		</form>
	      </div>
	    );
  	},


});