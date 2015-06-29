var alt = require('../alt');
var JobActions = require('../actions/JobActions');
var JobSource = require('../sources/JobSource');

class JobStore {
  constructor() {
    this.jobs = [];
    this.errorMessage = null;

    this.bindListeners({
      handleUpdateJobs: JobActions.UPDATE_JOBS,
      handleFetchJobs: JobActions.FETCH_JOBS,
      handleJobsFailed: JobActions.JOBS_FAILED,
      handleCreateJob: JobActions.CREATE_JOB
    });
  }

  handleUpdateJobs(jobs) {
    //console.table(jobs);
    this.jobs = jobs;
    this.errorMessage = null;
  }

  handleFetchJobs() {
    this.jobs = [];
  }

  handleJobsFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

  handleCreateJob(jobObj) {
    this.jobs.push(jobObj);
  }
};

module.exports = alt.createStore(JobStore, 'JobStore');
