var alt = require('../alt');

class UserActions {
  updateUser(user) {
    this.dispatch(user);
  }

  userFailed(err) {
    this.dispatch(err);
  }

 fetchUser() {
   this.dispatch();
 }

 checkForUserRemote() {
   this.dispatch();

 }


 /* kick off oauth and listen for an auth event
 socialLoginPromise = thirdPartyLogin(provider);
 handleAuthResponse(socialLoginPromise, 'profile');
 */

/*
// Handle third party login providers
    // returns a promise
    function thirdPartyLogin(provider) {
        var deferred = $.Deferred();

        rootRef.authWithOAuthPopup(provider, function (err, user) {
            if (err) {
                deferred.reject(err);
            }

            if (user) {
                deferred.resolve(user);
            }
        });

        return deferred.promise();
    };
    */


 /*
 *  // route to the specified route if sucessful
    // if there is an error, show the alert
    function handleAuthResponse(promise, route) {
        $.when(promise)
            .then(function (authData) {

            // route
            routeTo(route);

        }, function (err) {
            console.log(err);
            // pop up error
            showAlert({
                title: err.code,
                detail: err.message,
                className: 'alert-danger'
            });

        });
    }
*/

 /* if there is a user
 userRef = rootRef.child('users').child(user.uid);
 userRef.once('value', function (snap) {
   var user = snap.val();
   if (!user) {
     return;
   }

   set the fields
   form.find('#txtName').val(user.name);
   form.find('#ddlDino').val(user.favoriteDinosaur);
 });
 */

}

module.exports = alt.createActions(UserActions);
