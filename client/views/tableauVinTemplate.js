Template.tableauVinTemplate.helpers({
  vins: function() {
    return Vins.find({statusVin : 'nonBu'}, {sort: {submitted: -1}});
  },
  vinsBus: function() {
    return Vins.find({statusVin : 'Bu'}, {sort: {modifiedStatus: -1}});
  },
  submittedText: function() {
    var newDate = new Date(this.submitted);
    var month = newDate.getMonth();
    var day = newDate.getDate();
    var year = newDate.getFullYear()
    
    return (day + "." + month + "." + year); 
  }
  
});

Template.tableauVinTemplate.events ({
  'click .modifyStatus': function(e) {
    e.preventDefault();
   
    Meteor.call('modifyS', this._id);
  }
  
  
});  