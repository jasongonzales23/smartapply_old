'use strict'
var React = require('react');
var Router = require('react-router');
var { Route, DefaultRoute, RouteHandler, Link } = Router;
var RequireAuth = require('./RequireAuth');

var AltContainer = require('alt/AltContainer');
var UserStore = require('../stores/UserStore');
var JobStore = require('../stores/JobStore');
var JobActions = require('../actions/JobActions');

var User = React.createClass({
  render() {
    return (
      <div>
        <h2> Jobs for {this.props.user.facebook.cachedUserProfile.first_name}</h2>
      </div>
    );
  }
});

var UserJobs = React.createClass({
  getInitialState() {
    return JobStore.getState();
  },

  componentDidMount() {
    JobStore.listen(this.onChange);
    JobActions.fetchJobs();
  },

  componentWillUnmount() {
    JobStore.unlisten(this.onChange);
  },

  onChange(state) {
    this.setState(state);
  },

  render() {
    return (
      <ul>
        {this.state.jobs.map((job) => {
          return (
            <li key={job.id}>{job.name}</li>
          );
        })}
      </ul>
    );
  }
});

var AddJob = React.createClass({
  render() {
    return (
      <div>
        <input type="text" name="add-job" />
        <button>Add Job</button>
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
        <AltContainer store={JobStore}>
          <UserJobs />
          <AddJob />
        </AltContainer>
      </div>
    );
  }
});

module.exports = Jobs;
