Handlebars.registerHelper('compareStatus', function(n) {
  
  if (n === 'Bu') {
   return true;
  }
});

Handlebars.registerHelper('couleurDuVin', function(t) {

  
  if (t === 'Rouge') {
   return true;
  }
  
});

Handlebars.registerHelper('isContactMessageSent', function() {

	  if (Session.get('messageSent')) {
   		return true;
			alert('cool');
  	}
  
 
  
});


