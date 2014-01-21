
if(Meteor.isClient){
    Meteor.startup(function(){
        Hooks.init();
    });
}

Hooks.onLoggedIn = function () {
    Router.go('maCaveTemplateListe');
}

Hooks.onLoggedOut = function () {
    Router.go('/');
}


 