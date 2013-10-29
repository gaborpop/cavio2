Meteor.subscribe('vins');
if(Meteor.isClient){
    Meteor.startup(function(){
        Hooks.init();
    });
}

Hooks.onLoggedIn = function () {
    Meteor.Router.to('maCaveTemplate');
}

Hooks.onLoggedOut = function () {
    Meteor.Router.to('/');
}


 