Meteor.Router.add({
  '/': 'accueilTemplate',
  '/contact': 'contactForm',
  '/macave':'maCaveTemplate',
  '/macave/:_id/edit': {
    to: 'vinEdit',
    and: function(id) { Session.set('currentVinId', id); }
  },
  '/reset-password/:_id': {
    to: 'passwordRecovery',
    and: function(id) { Session.set('resetPassword', id); }
  }

  
});

Meteor.Router.filters({
  'requireLogin': function(page) {
    if (Meteor.user())
      return page;
    else if (Meteor.loggingIn())
      return 'loading';
    else
      return 'accessDenied';
  }
})
Meteor.Router.filter('requireLogin', {only: 'maCaveTemplate'});
