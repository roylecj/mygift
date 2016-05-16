
Template.ideas.helpers({
  ideasForOthers: function() {
    return Ideas.find({forMeFlag: false, userId: Meteor.userId()}).fetch();
  },
  ideasForMe: function() {
    return Ideas.find({forMeFlag: true, userId: Meteor.userId()}).fetch();
  }
});
