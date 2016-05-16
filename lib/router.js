Router.configure({
  layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() {
      Meteor.subscribe('ideas')
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
})
