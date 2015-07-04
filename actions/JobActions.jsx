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

  createJob(job) {
    var id = (+new Date() + Math.floor(Math.random() * 999999)).toString(36)
    job.id = id;
    this.dispatch(job);
    JobSource.push(job);
  }
}

module.exports = alt.createActions(JobActions);
