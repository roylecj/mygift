
Template.header.helpers({
  notLoggedIn: function() {
    // If we are in the signup form, then we need to return false...
      return ! Session.get("signedIn")
  },
  signedIn: function() {
      return Session.get("signedIn")
  },
  currentUserName: function() {
    // return Meteor.user().username;

    if (Meteor.user().profile.name) {
      return Meteor.user().profile.name;
    } else {
      return Meteor.user().username;
    }
  },
  isActive: function(sOption) {
    if (sOption === Session.get("currentOption")) {
      return "active"
    } else {
      return ""
    }
  }
});

Template.header.events({
  'submit form': function(e) {
    e.preventDefault();

    var userId =  $(e.target).find('[name=loginName]').val();
    var password = $(e.target).find('[name=password]').val();

    Meteor.loginWithPassword(userId, password, function(e) {
        Session.set('signedIn', true);
        Router.go("ideas");
    });
  },
  'click .btnLogout': function(e) {
    Meteor.logout(function(){
        Session.set("signedIn", false);
        Router.go("home");
    });
  },
  'click .btnGift': function(e) {
    Session.set("currentOption", "GIFTS");
  },
  'click .btnPeople': function(e) {
    Session.set("currentOption", "PEOPLE");
  },
  'click .btnMessages': function(e) {
    Session.set("currentOption", "MESSAGES");
  }

})
