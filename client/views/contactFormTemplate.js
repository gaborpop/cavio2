Template.contactForm.events ({
  
  'click .envoyerContactForm': function(e) {
    e.preventDefault();
     var fromM = $('#name120').val();
    var mailM = $('#email120').val();
    var messageM = $('#message120').val();
   
  
    Meteor.call('sendMessage', mailM, fromM, messageM );
   Router.go ('maCaveTemplate');
    alert('Votre mail a été envoyé');    
  }
  

});
