//Cms 
var React = require('react');
var UsersSection = require("./users/UsersSection.react");

module.exports = React.createClass({
	getInitialState:function(){
		return {
		    currentComponent: null,
		};
	},
	handleClick:function(e){

		this.setState({currentComponent:e.target.className})
	},
  	render: function() {
  		var component;
  		switch (this.state.currentComponent){
  			case "users":
  				component = <UsersSection />;
  				break;
  			default:
  				component = null
  		}
  		
	    return (
	      <div className="Nemesis">
	      	<nav>
	      		<div className="nav-wrapper">
	      			<div className="users" onClick={this.handleClick}>users</div>
	      		</div>
	      	</nav>
	      	{component}
	      </div>
	    );
  	}
  	
});

