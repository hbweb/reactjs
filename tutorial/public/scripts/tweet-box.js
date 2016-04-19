/* jQuery Stuff */

/*
$( document ).ready(function() {
    // Initially disable the button
	$("button").prop("disabled", true);


	$("textarea").on("input", function(){
		if ($(this).val().length > 0){
			$("button").prop("disabled", false);
		} else {
			$("button").prop("disabled", true);
		}
	})
});
*/


/* React.js Stuff */

var TweetBox = React.createClass({

	getInitialState : function(){
		return {
			text: "",
			photoAdded: false
		}

	},

	handleTypingChange: function(event){
		//console.log(event.target.value);
		this.setState({text: event.target.value})
	},

	togglePhoto: function(event){
		this.setState({photoAdded: !this.state.photoAdded});
	},

	remindingCharacters: function(){
		if (this.state.photoAdded){
			return 140-23-this.state.text.length;
		}else{
			return 140-this.state.text.length;
		}
	},

	// Handle overflow
	overflowAlert: function(){
		if(this.remindingCharacters() <0 ){
			return (
			<div className="alert alert-warning">
				<strong>Oops! Text are too long..</strong><br />
			</div>
		);
		}
		
	},

	render: function(){
		return (
			<div className="well clearfix">

				{this.overflowAlert()}
				<textarea className="form-control" onChange={this.handleTypingChange}></textarea>
				<br />
				
				<span>{this.remindingCharacters()}</span>
				<button className="js-tweet-button btn btn-primary pull-right" disabled={this.state.text.length === 0 && !this.state.photoAdded}>Tweet</button>
				<button className="js-add-photo-button btn btn-default pull-right" onClick={this.togglePhoto}>{this.state.photoAdded ? "✓ Photo Added" : "Add Photo"}</button>

			</div>
		);
	}
});


ReactDOM.render(
	<TweetBox />, 
	document.getElementById("container")
);

