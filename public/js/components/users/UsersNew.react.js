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
			username: this.refs.username.value.trim(),
			email: this.refs.email.value.trim()
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
							<label>Username:</label>
		      		<input type="text" ref="username" value={this.state.username} onChange={this.handleChange} />
							<label>Email:</label>
		      		<input type="text" ref="email" value={this.state.email} onChange={this.handleChange} />
		      		<input type="submit" value="Create"/>
	      		</form>
	      </div>
	    );
  	},


});
