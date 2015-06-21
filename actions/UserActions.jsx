var alt = require('../alt');

class UserActions {
  updateUser(user) {
    this.dispatch(user);
  }

  userFailed(err) {
    this.dispatch(err);
    console.log(err);
  }

 fetchUser() {
   this.dispatch();
 }

 checkForUserRemote() {
   this.dispatch();
  
 }
}

module.exports = alt.createActions(UserActions);
