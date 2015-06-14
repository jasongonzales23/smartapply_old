var alt = require('../alt');
var UserActions = require('../actions/UserActions');

class UserStore {
  constructor() {
    this.user = {};

    this.bindListeners({
      handleUpdateUser: UserActions.UPDATE_USER,
      handleFetchUser: UserActions.FETCH_USER,
      handleUserFailed: UserActions.USER_FAILED
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
};

module.exports = alt.createStore(UserStore, 'UserStore');
