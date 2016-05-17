
Template.messageList.helpers({
  messageItems: function() {
    MessageItems.find().fetch();
  }
});
