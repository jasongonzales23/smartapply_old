var mockData = [
  {id: 0, name: "AliveCor"},
  {id: 1, name: "Bluebox"}
];

var JobsFetcher = {
  fetch: function() {
    console.log('job fetcher!');
    return new Promise(function (resolve, reject) {
      setTimeout(function () {
        resolve(mockData);
      }, 250);
    });
  }

}

module.exports = JobsFetcher;
