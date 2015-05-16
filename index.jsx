'use strict'
var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var Firebase = require('firebase')
var ref = new Firebase('https://resplendent-heat-940.firebaseio.com/');
var cachedUser = null;

var requireAuth = (Component) => {
  return class Authenticated extends React.Component {
    static willTransitionTo(transition) {
      if (!auth.loggedIn()) {
        ref.authWithOAuthPopup("facebook", function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            transition.redirect('/login', {}, {'nextPath' : transition.path});
            console.log("Authenticated successfully with payload:", authData);
          }
        });
      }
    }
    render () {
      return <Component {...this.props}/>
    }
  }
};

var auth = {
  loggedIn: function() {
    return cachedUser && true || ref.getAuth() || false;
  },

  store: function(authPayload) {
    localStorage.setItem("auth");
  },

  dataCallback: function(authData) {

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
