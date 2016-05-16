
Template.home.helpers({
});

Template.home.events({
  'click .btnSignUp': function(e, s) {
    Router.go("signUp");
  }
});
