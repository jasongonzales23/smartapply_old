var alt = require('../alt');
var JobsFetcher = require('../utils/JobsFetcher');

class JobActions {
  updateJobs(jobs) {
    this.dispatch(jobs);
  }

  fetchJobs() {
    this.dispatch();

    JobsFetcher.fetch()
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
}

module.exports = alt.createActions(JobActions);
