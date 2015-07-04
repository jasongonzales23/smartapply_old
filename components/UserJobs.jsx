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
        jobsArr.push(
          <div key={job} className="job">
            <ul>
              <li>Company: {jobs[job].companyName}</li>
              <li>Job Title: {jobs[job].jobTitle}</li>
            </ul>
          </div>
        );
      }
      return(jobsArr);
    };

    return (
      <div id="jobs">
        {jobbies(this.state.jobs)}
      </div>
    );
  }
});

module.exports = UserJobs;
