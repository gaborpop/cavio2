
Router.configure({
	layoutTemplate: 'layout',
  loadingTemplate: 'loading',
  waitOn: function() { return Meteor.subscribe('vins'); }
});
Router.map( function () {
  
  this.route('accueilTemplate', {
    path: '/'
  });
  this.route('contactForm', {
    path: '/contact'
  });
   this.route('maCaveTemplateListe', {
    path: '/macaveliste'
  });
	this.route('maCaveTemplateThumbnail', {
    path: '/macavethumbnail'
  });
  this.route('vinEdit', {
  // get parameter via this.params
    path: '/macave/:_id/edit',
    data: function(id) {
      Session.set('currentVinId', this.params._id);
    }
  });
  this.route('passwordRecovery', {
  // get parameter via this.params
    path: '/reset-password/:_id',
    data: function(id) {
      Session.set('resetPassword', this.params._id);
    }
  });
  
  
});

















