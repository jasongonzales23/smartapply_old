var alt = require('../alt');
var JobSource = require('../sources/JobSource');

class JobActions {
  updateJobs(jobs) {
    this.dispatch(jobs);
  }

  fetchJobs() {
    this.dispatch();

    JobSource.fetch()
      .then((jobs) => {
        this.actions.updateJobs(jobs);
      })
      .catch((errorMessage) => {
        this.actions.jobsFailed(errorMessage);
      });
  }

  jobsFailed(errorMessage) {
    this.dispatch(errorMessage);
  }

  createJob(text) {
    text = text.trim()
    if (text === '') {
      return false
    }
    // hand waving of course.
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36)
    var jobObj = {
      id: id,
      name: text
    };

    this.dispatch(jobObj);
    JobSource.push(jobObj)
     .then((jobs) => {
       //console.table(jobs);
       //this.actions.handleUpdateJobs(jobs);
     });
  }
}

module.exports = alt.createActions(JobActions);
