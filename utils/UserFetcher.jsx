var React = require('react');
var Firebase = require('firebase')
var ref = new Firebase('https://resplendent-heat-940.firebaseio.com/');
var UserActions = require('../actions/UserActions');


//TODO this cose isn't used, either move stuff from the store to here or delete it
var UserFetcher = {
  fetchUser() {
    console.log('user fetcher is doing its thing right meow');
    return {
      remote() {
        return new Promise(function (resolve, reject) {
          if (true) {
            resolve();
          }
        })
      },

      local() {
        return null;
      },

      success: UserActions.updateUser,
      error: UserActions.userFailed,
      loading: UserActions.fetchUser

    }
  }
};

module.exports = UserFetcher;
