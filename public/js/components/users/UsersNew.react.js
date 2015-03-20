var React = require('react');
var ServerActor = require('../../actions/users/UsersServerActors');

module.exports =  React.createClass({
	getInitialState:function(){
		return {
			username:"",
			email:""
		}
	},
	handleChange: function(event){
		this.setState({
			username: this.refs.username.getDOMNode().value,
			email: this.refs.email.getDOMNode().value
		});
	},
	handleSubmit: function(e) {
		e.preventDefault();
		ServerActor.create(this.state);
	},
  	render: function() {

	    return (
	      <div className="UsersNew">
	      		<form  onSubmit={this.handleSubmit}>
		      		<input type="text" ref="username" value={this.state.username} onChange={this.handleChange} />
		      		<input type="text" ref="email" value={this.state.email} onChange={this.handleChange} />
		      		<input type="submit"/>
	      		</form>
	      </div>
	    );
  	},


});