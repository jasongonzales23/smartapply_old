var alt = require('../alt');
var UserActions = require('../actions/UserActions');

class UserStore {
  constructor() {
    this.user = {};

    this.bindListeners({
      handleUpdateUser: UserActions.UPDATE_USER,
      handleFetchUser: UserActions.FETCH_USER,
      handleUserFailed: UserActions.USER_FAILED,
      handleCheckForUserRemote: UserActions.CHECK_FOR_USER_REMOTE
    });
  }

  handleUpdateUser(user) {
    console.log("update user ", user);
    this.user = user;
    this.errorMessage = null;
  }

  handleFetchUser() {
    this.user = {};
  }

  handleUserFailed(errorMessage) {
    this.errorMessage = errorMessage;
  }

  handleCheckForUserRemote() {
    var Firebase = require('firebase')
    var ref = new Firebase('https://resplendent-heat-940.firebaseio.com/');
    var _id = this.user.uid;

    //get the stuff from firebase, this is bad, move it out to a fetcher
    ref.once('value', function(snap) {
      console.log(snap.val()); 
    });

  }
};

module.exports = alt.createStore(UserStore, 'UserStore');
