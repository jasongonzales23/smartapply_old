'use strict'
var React = require('react');
var JobStore = require('../stores/JobStore');
var JobActions = require('../actions/JobActions');

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
    var jobbies = function(jobs) {
      var jobsArr = [];
      for (var job in jobs) {
        jobsArr.push(<li key={job}>{jobs[job].name}</li>);
      }
      return(jobsArr);
    };

    return (
      <ul>
        {jobbies(this.state.jobs)}
      </ul>
    );
  }
});

module.exports = UserJobs;
