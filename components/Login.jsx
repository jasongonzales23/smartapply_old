var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;

var Login = React.createClass({
  render () {
    return (
      <div>
        <Link to="jobs">Jobs</Link>
        <h2>Login</h2>
      </div>
    );
  }
});

module.exports = Login;
