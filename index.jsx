'use strict'
var React = require('react');
var Router = require('react-router');
//var Hello = require('./Hello');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var requireAuth = (Component) => {
  return class Authenticated extends React.Component {
    static willTransitionTo(transition) {
      if (!auth.loggedIn()) {
        transition.redirect('/login', {}, {'nextPath' : transition.path});
      }
    }
    render () {
      return <Component {...this.props}/>
    }
  }
};

var auth = {
  loggedIn: function() {
    return false;
  }
};

var Login = React.createClass({
  render: function() {
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
  render: function() {
    return (
      <div>
        <h1>App</h1>
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
