'use strict'
var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var Firebase = require('firebase')
var ref = new Firebase('https://resplendent-heat-940.firebaseio.com/');
var AltContainer = require('alt/AltContainer');

var RequireAuth = require('./components/RequireAuth');
var Login = require('./components/Login');
var Jobs = require('./components/Jobs');

var UserStore = require('./stores/UserStore');

var App = React.createClass({
  getInitialState () {
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

  render () {
    return (
      <div>
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
