var React = require('react');
var Firebase = require('firebase')
var ref = new Firebase('https://resplendent-heat-940.firebaseio.com/');
var UserActions = require('../actions/UserActions');

var UserFetcher = {
  fetchUser() {
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
