Template.tableauVinTemplateRight.helpers({
  vinsBus: function() {
    return Vins.find({statusVin : 'Bu'}, {sort: {submitted: -1}});
  }

  
});  

Template.tableauVinTemplateRight.events ({
  'click .modifyStatus': function(e) {
    e.preventDefault();
   
    Meteor.call('modifyS', this._id);
  }
  
  
});  