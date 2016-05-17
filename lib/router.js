Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {[
      Meteor.subscribe('ideas'),
      Meteor.subscribe('messageItems')]
    }
});

Router.route("/", {
  name: "home"
});

Router.route('/main', {
  name: "mainPage"
});

Router.route('/signup', {
  name: "signUp"
});

Router.route('/ideas', {
  name: 'ideas'
});

Router.route('/people', {
  name: 'peopleList'
});

Router.route('/messages', {
  name: 'messageList'
});

Router.route("/findPerson", {
  name: 'findPerson'
  });

Router.route("/message/:_id", {
  name: 'messageItem',
  data: function() {
    return MessageItems.find({_id: this.params._id})
  }
})
