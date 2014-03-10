Template.tableauVinTemplateRight.helpers({
  vinsBus: function() {
    return Vins.find({statusVin : 'Bu'}, {sort: {submitted: -1}});
  },
  submittedModifiedText: function() {
    var newDate = new Date(this.modifiedStatus);
    var month = newDate.getMonth();
    var day = newDate.getDate();
    var year = newDate.getFullYear()
    
    return (day + "." + month + "." + year); 
  },
  settings: function () {
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
					
					return new Handlebars.SafeString('<a href=\"/'+ object._id +'/\">Remettre dans la cave</a>'); 			
    	}
		}
		
		
				] }
    }

  
});  

Template.tableauVinTemplateRight.events ({
  'click .reactive-table tr': function(e) {
    e.preventDefault();
  
    
    if(e.target.href) {
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