Template.contactForm.events ({
  
  'click .envoyerContactForm': function(e) {
    e.preventDefault();
     var fromM = $('#name120').val();
    var mailM = $('#email120').val();
    var messageM = $('#message120').val();
   
  	Session.set('messageSent', false);
    Meteor.call('sendMessage', mailM, fromM, messageM );
		
    Session.set('messageSent', true);
		alert('Votre message a bien été envoyé');
   
		if (Meteor.user()) {
			Router.go ('maCaveTemplateListe');
		}
		else
			Router.go ('accueilTemplate');
  }
  

});
