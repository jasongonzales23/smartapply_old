'use strict'
var Firebase = require('firebase')
var React = require('react')
var firebaseRef = new Firebase('https://resplendent-heat-940.firebaseio.com/');

module.exports = React.createClass({
  componentWillMount: function() {
    var firebaseValue = "still nothing asshole";

    firebaseRef.child("testKey").on("value", function(snapshot) {
      var firebaseValue = snapshot.val();
      this.setState({
        thing: firebaseValue
      });
    }.bind(this));

  },

  getInitialState: function() {
    var firebaseValue = "nothing yet";

    return {
      thing: firebaseValue
    }
  },

  render: function(){
      return <div>Hello {this.state.thing}</div>
  }
});
