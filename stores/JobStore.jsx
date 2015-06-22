var alt = require('../alt');
var JobActions = require('../actions/JobActions');
var JobsFetcher = require('../utils/JobsFetcher');

class JobStore {
  constructor() {
    this.jobs = [];
    this.errorMessage = null;

    this.bindListeners({
      handleUpdateJobs: JobActions.UPDATE_JOBS,
      handleFetchJobs: JobActions.FETCH_JOBS,
      handleJobsFailed: JobActions.JOBS_FAILED
    });
  }

  handleUpdateJobs(jobs) {
    this.jobs = jobs;
    this.errorMessage = null;
  }

  handleFetchJobs() {
    this.jobs = [];
  }

  handleJobsFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }
};

module.exports = alt.createStore(JobStore, 'JobStore');
