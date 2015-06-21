var React = require('react');
var Firebase = require('firebase')
var ref = new Firebase('https://resplendent-heat-940.firebaseio.com/');
var cachedUser = null;
var UserFetcher = require('../utils/UserFetcher');
var UserActions = require('../actions/UserActions');

var auth = {
  loggedIn: function() {
    return cachedUser && true || ref.getAuth() || false;
  },

  store: function(authPayload) {
    console.log('store fired');
  },

  dataCallback: function(authData) {
    UserActions.updateUser(authData);
    UserActions.checkForUserRemote(authData);
  }
};

var RequireAuth = (Component) => {
  return class Authenticated extends React.Component {
    static willTransitionTo(transition) {
      var loggedIn = auth.loggedIn();

      if (!loggedIn) {
        ref.authWithOAuthPopup("facebook", function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            transition.redirect('/login', {}, {'nextPath' : transition.path});
            console.log("Authenticated successfully with payload:", authData);
            auth.dataCallback(authData);
          }
        });
      } else {
        auth.dataCallback(loggedIn);
      }
    }
    render () {
      return <Component {...this.props}/>
    }
  }
};

module.exports = RequireAuth;
