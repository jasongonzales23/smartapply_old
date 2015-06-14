var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

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

module.exports = Login;
