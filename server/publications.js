Meteor.publish('vins', function() {
  return Vins.find({userId: this.userId });
});
Meteor.publish('dbvins', function() {
  return Dbvins.find();
});


