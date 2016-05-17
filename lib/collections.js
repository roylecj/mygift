Ideas = new Mongo.Collection("ideas");
MessageItems = new Mongo.Collection("messageItems");

Ideas.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
});

MessageItems.allow({
  insert: function(){
    return true;
  },
  update: function(){
    return true;
  },
  remove: function(){
    return true;
  }
})
