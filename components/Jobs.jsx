'use strict'
var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var RequireAuth = require('./RequireAuth');

var User = require('./User.jsx');
var UserJobs = require('./UserJobs.jsx');
var AddJob = require('./AddJob.jsx');

var AltContainer = require('alt/AltContainer');
var UserStore = require('../stores/UserStore');
var JobStore = require('../stores/JobStore');
var JobActions = require('../actions/JobActions');


var Jobs = RequireAuth(class extends React.Component {
  render () {
    return (
      <div>
        <Link to="login">Login</Link>
        <AltContainer store={UserStore}>
          <User />
        </AltContainer>
        <AltContainer store={JobStore}>
          <AddJob />
          <UserJobs />
        </AltContainer>
      </div>
    );
  }
});

module.exports = Jobs;
