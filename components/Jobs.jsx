'use strict'
var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var RequireAuth = require('./RequireAuth');

var AltContainer = require('alt/AltContainer');
var UserStore = require('../stores/UserStore');

var User = React.createClass({
  render() {
    return (
      <div>
        <h2> Jobs for {this.props.user.facebook.cachedUserProfile.first_name}</h2>
      </div>
    );
  }
});

var Jobs = RequireAuth(class extends React.Component {
  render () {
    return (
      <div>
        <Link to="login">Login</Link>
        <AltContainer store={UserStore}>
          <User />
        </AltContainer>
      </div>
    );
  }
});

module.exports = Jobs;
