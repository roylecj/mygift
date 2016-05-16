Meteor.methods({
  createAccount:function(userName, password, emailAddress, personName, personAge){
    Accounts.createUser({
      username: userName,
      password: password,
      email: emailAddress,
      profile: {
        name: personName,
        age: personAge }
    });
  }
});
