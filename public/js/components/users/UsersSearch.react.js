var React = require('react');
var ServerActor = require('../../actions/users/UsersServerActors');

module.exports =  React.createClass({
	getInitialState:function(){
		return {
			search:""
		}
	},
	_search: function(event){
		this.setState({search: event.target.value});
		if(event.target.value.length > 0){
			
			ServerActor.search("name",event.target.value)
		}else{
			ServerActor.get();
		}
	},
  	render: function() {

	    return (
	      <div className="UsersSearch">
	      		<input type="search" value={this.state.search} placeholder="Search..." onChange={this._search} />
	      </div>
	    );
  	},


});