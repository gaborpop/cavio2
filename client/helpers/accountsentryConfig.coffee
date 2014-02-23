Meteor.startup ->
  AccountsEntry.config
    privacyUrl: '/privacy-policy'
    termsUrl: '/terms-of-use'
    homeRoute: '/'
    passwordSignupFields: 'EMAIL_ONLY'
    dashboardRoute: '/macaveliste'
    