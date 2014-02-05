
if(Meteor.isClient){
    Meteor.startup(function(){
        Hooks.init();
    });
  Meteor.subscribe('dbvins');
}

Hooks.onLoggedIn = function () {
    Router.go('maCaveTemplateListe');
}

Hooks.onLoggedOut = function () {
    Router.go('/');
}


 