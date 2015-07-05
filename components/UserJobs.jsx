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
          <div key={job} className="job list-group-item">
            <h4 contentEditable="true" className="list-group-item-heading">{jobs[job].companyName}</h4>
            <p className="list-group-item-text">Job Title: {jobs[job].jobTitle}</p>
          </div>
        );
      }
      return(jobsArr);
    };

    return (
      <div id="jobs" className="list-group col-md-12">
        {jobbies(this.state.jobs)}
      </div>
    );
  }
});

module.exports = UserJobs;
