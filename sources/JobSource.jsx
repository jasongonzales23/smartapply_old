var Firebase = require('firebase');

var ref = new Firebase('https://resplendent-heat-940.firebaseio.com/');

var mockData = [
  {id: 0, name: "AliveCor"},
  {id: 1, name: "Bluebox"}
];

var JobSource = {
  fetch: function() {
    return new Promise(function(resolve, reject) {
      ref.child('jobs').once('value', function(snap) {
        var jobs = snap.val();
        console.log(jobs);
        resolve(jobs);
      });
    });
  },

  push: function(job) {
    ref.child('jobs').child(job.id).update(job);
  }

}

module.exports = JobSource;
