
if(Meteor.isClient){
    Meteor.startup(function(){
        Hooks.init();
    });
  Meteor.subscribe('dbvins');
}

Hooks.onLoggedIn = function () {
    
}

Hooks.onLoggedOut = function () {
    Router.go('/');
}
WebFontConfig = {
    google: { families: [ "Ubuntu:300,400,500,700","Great Vibes:400"] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })();

 