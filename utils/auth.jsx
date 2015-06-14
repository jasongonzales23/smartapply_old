var React = require('react');
var cachedUser = null;
var Firebase = require('firebase')
var ref = new Firebase('https://resplendent-heat-940.firebaseio.com/');

var auth = {
  loggedIn: function() {
    console.log(ref.getAuth());
    return cachedUser && true || ref.getAuth() || false;
  },

  store: function(authPayload) {
    console.log('store fired');
    //localStorage.setItem("auth");
  },

  dataCallback: function(authData) {
    return authData.facebook.cachedUserProfile.first_name;

  }
};

var requireAuth = (Component) => {
  return class Authenticated extends React.Component {
    static willTransitionTo(transition) {
      if (!auth.loggedIn()) {
        ref.authWithOAuthPopup("facebook", function(error, authData) {
          if (error) {
            console.log("Login Failed!", error);
          } else {
            transition.redirect('/login', {}, {'nextPath' : transition.path});
            console.log("Authenticated successfully with payload:", authData);
            var name = auth.dataCallback(authData);
          }
        });
      }
    }
    render () {
      return <Component {...this.props}/>
    }
  }
};

module.exports = requireAuth;
