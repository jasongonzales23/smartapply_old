'use strict'
var React = require('react');
var UserStore = require('../stores/UserStore');

var User = React.createClass({
  getInitialState() {
    return UserStore.getState();
  },

  componentDidMount() {
    UserStore.listen(this.onChange);
  },

  componentWillUnmount() {
    UserStore.unlisten(this.onChange);
  },

  onChange(state) {
    this.setState(state);
  },

  render() {
    var username = function(state) {

      if (state.user.facebook) {
        return `Sup ${state.user.facebook.cachedUserProfile.first_name}`;
      } else {
        return "Hi there, we're still trying to log you in, just a second please."
      }
    };

    return (
      <div>
        <h2>{username(this.state)}</h2>
      </div>
    );
  }
});

module.exports = User;
