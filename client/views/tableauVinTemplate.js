Template.tableauVinTemplate.helpers({
  vins: function() {
    return Vins.find({}, {sort: {submitted: -1}});
  }

  
});

Template.tableauVinTemplate.events ({
  'click .modifyStatus': function(e) {
    e.preventDefault();
   
    Meteor.call('modifyS', this._id);
  }
  
});  