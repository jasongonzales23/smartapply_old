'use strict'
var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var Firebase = require('firebase')
var ref = new Firebase('https://resplendent-heat-940.firebaseio.com/');
var AltContainer = require('alt/AltContainer');
var requireAuth = require('./utils/auth');

var Login = React.createClass({
  render () {
    return (
      <div>
        <h2>Login</h2>
        <Link to="jobs">Jobs</Link>
      </div>
    );
  }
});

var Jobs = requireAuth(class extends React.Component {
  render () {
    return (
      <div>
        <h2>Jobs</h2>
        <Link to="login">Login</Link>
      </div>
    );
  }
});

var App = React.createClass({
  getInitialState () {
    return {
      name: ""
    }
  },

  render () {
    return (
      <div>
        <h1>sup {this.state.name}</h1>
        <RouteHandler/>
      </div>
    );
  }
});

var routes = (
  <Route handler={App}>
    <DefaultRoute name="jobs" handler={Jobs}/>
    <Route name="login" handler={Login}/>
  </Route>
);

Router.run(routes, function(Handler) {
  React.render(<Handler/>, document.getElementById('content'));
});
