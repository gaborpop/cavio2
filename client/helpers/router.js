Meteor.Router.add({
  '/': 'accueilTemplate',
  '/macave':'maCaveTemplate',
  '/macave/:_id/edit': {
    to: 'vinEdit',
    and: function(id) { Session.set('currentVinId', id); }
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
