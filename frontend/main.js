//local dev backendHostURL:
var backendHostUrl = 'http://localhost:8081';

// production backendHostURL:
//var backendHostUrl = 'https://backend-dot-<project-name>.appspot.com';



// Firebase
$(function() {
  configureFirebaseLogin();
  configureFirebaseLoginWidget();
});
// Firebase


// This functions is called when an element in the DOM
// with id="sign-out-btn" is clicked and calls firebase signout
// Sign out
$(document).on('click', '#sign-out-btn', function(event) {
  event.preventDefault();

  firebase.auth().signOut().then(function() {
    console.log("Sign out successful");
  }, function(error) {
    console.log(error);
  });
});
// Sign out
