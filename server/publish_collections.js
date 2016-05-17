Meteor.publish('ideas', function() {
    return Ideas.find();
});

Meteor.publish('messageItems', function() {
    return MessageItems.find();
})
