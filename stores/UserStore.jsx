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
    var uid = this.user.uid;
    var userData = this.user;

    //get the stuff from firebase, this is bad, move it out to a fetcher
    var usersRef = ref.child('users');
    var userRef = usersRef.child(uid);
    userRef.once('value', function(snap) {
      var user = snap.val();

      if(!user) {
        var userObj = {};
        userObj[uid] = userData;
        usersRef.update(userObj, function(err) {
          if (err) {
            console.log(err);
          } else {
            console.log('data saved successfully!');
            this.handleUpdateUser(user);
          }

        });
      } else {
        //console.log(user);
      }
    });

  }
};

module.exports = alt.createStore(UserStore, 'UserStore');
