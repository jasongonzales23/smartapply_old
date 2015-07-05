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
        <nav className="navbar navbar-default">
          <div className="container">
            <div className="navbar-header">
              <a className="navbar-brand" href="/">
                smartapply
              </a>
            </div>

            <div className="navbar-text navbar-right">
              <AltContainer store={UserStore}>
                <User />
              </AltContainer>
            </div>

          </div>
        </nav>
        <AltContainer store={JobStore}>
          <div className="container">
            <AddJob />
            <UserJobs />
          </div>
        </AltContainer>
      </div>
    );
  }
});

module.exports = Jobs;
