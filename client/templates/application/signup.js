
Template.signUp.helpers({
});

Template.signUp.events({
  'submit form': function(e, t) {
    e.preventDefault();

    var emailAddress =  $(e.target).find('[name=emailAddress]').val();
    var password = $(e.target).find('[name=password]').val();
    var personName = $(e.target).find("[name=givenName]").val() + " " + $(e.target).find("[name=surname]").val();
    var personAge = $(e.target).find("[name=age]").val();

    Meteor.call("createAccount", emailAddress, password, emailAddress, personName, personAge );

    Meteor.loginWithPassword(emailAddress, password, function(e) {
        // If e then we have a problem...

        Session.set("signedIn", true);
    });
  }
});
