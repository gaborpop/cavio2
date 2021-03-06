Template.tableauVinTemplate.helpers({
  vins: function() {
    return Vins.find({statusVin : 'nonBu'}, {sort: {submitted: -1}});
		
  },
  vinsBus: function() {
    return Vins.find({statusVin : 'Bu'}, {sort: {modifiedStatus: -1}});
  },
  vinsdb: function() {
    return Dbvins.find({});
  },
  

	
  submittedText: function() {
    var newDate = new Date(this.submitted);
    var month = newDate.getMonth();
    var day = newDate.getDate();
    var year = newDate.getFullYear()
    
    return (day + "." + month + "." + year); 
  },
  isNoteOne: function() {
    if (this.noteVin === '1')
      return (true); 
  },
  isNoteTwo: function() {
    if (this.noteVin === '2')
      return (true); 
    
    
  },
	settings: function () {
		array1 = [];
		Session.set('buID', array1);
		i18n.setLanguage('fr');
        return { fields: [
    { key: 'nomVin', label: 'Producteur' },
    { key: 'regionVin', label: 'Région' },
		{ key: 'couleurVin', label: 'Couleur' },			
    { key: 'appellationVin', label: 'Appellation' },
		{ key: 'anneeVin', label: 'Année' },
		{ key: 'noteVin', label: 'Note' },
		{ key: 'cavemin',
        label: 'Garde',
		 fn: function (value, object) { return object.cavemin + "/" + object.cavemax; }
    },
		{ key: 'tempmin', 
					label: 'T°',
		 fn: function (value, object) { return object.tempmin + "/" + object.tempmax; }
    },
		{ key: 'commentaireVin', label: 'Avis' },			
		{ 
        key: 'cavemax',
        label: 'Actions',
				fn: function (value, object) {
					
					
					return new Handlebars.SafeString('<a id="editID" href="/macave/' + object._id +'/edit">Edit</a>' +' / '+ '<a href=\"/'+ object._id +'/\">Archiver</a>'); 			
    	    
        }
		}
		
		
				] }
    }
  
});

Template.tableauVinTemplate.events ({
  'click .reactive-table tr': function(e) {
    e.preventDefault();
    if (e.target.id) {
       
      url10 = e.target.href;
      
      url20 = url10.split("com", 2);
      url30 = url20[1];
     
      Router.go(url30);
    }
    
    else if(e.target.href) {
      url1 = e.target.href;
      url2 = url1.split("com", 2);
     
      url3 = url2[1].substring(1, url2[1].length-1);
      
     
      Meteor.call('modifyS', url3);
    }
    else {
       return;
    }
  }
  
  
});  


