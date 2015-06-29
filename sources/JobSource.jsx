var Firebase = require('firebase')
var baseRef = new Firebase('https://resplendent-heat-940.firebaseio.com/');
var mockData = [
  {id: 0, name: "AliveCor"},
  {id: 1, name: "Bluebox"}
];

var JobsFetcher = {
  fetch: function() {
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(mockData);
      }, 250);
    });
  },

  push: function(job) {
    //send the new job to the server
    //if success, call a success action,
    //maybe kick off a new fetch ultimately?
    //if error, handle it
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        console.table(mockData);
        resolve(mockData);
      }, 250);
    });
  }

}

module.exports = JobsFetcher;
