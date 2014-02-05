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
    
    
  }
  
});

Template.tableauVinTemplate.events ({
  'click .modifyStatus': function(e) {
    e.preventDefault();
   
    Meteor.call('modifyS', this._id);
  }
  
  
});  
Template.tableauVinTemplate.rendered = function () {
  var availableTags = [
     "Alsace Grand Cru",
"Côtes de Toul",
"Moselle",
"Alsace - Rieseling",
"Alsace - Gewurztraminer",
"Alsace - Pinot Gris",
"Alsace - Muscat",
"Alsace - Pinot Noir",
"Alsace - Sylvaner",
"Alsace - Pinot Blanc",
"Coteaux Bourguignons",
"Bourgogne",
"Bourgogne Aligoté",
"Bourgogne Passe-tout-grains",
"Bourgogne mousseux",
"Crémant de Bourgogne",
"Petit Chablis",
"Chablis",
"Chablis Grand Cru",
"Irancy",
"Saint-Bris",
"Côte de Nuits-VIllages ou Vins fins de la Côte de Nuits",
"Marsannay",
"Fixin",
"Gevrey-Chambertin",
"Morey-Saint-Denis",
"Chambolle-Musigny",
"Vougeot",
"Vosne-Romanée",
"Nuit-Saint-Georges",
"Chapelle-Chambertin",
"Charmes-Chambertin",
"Griottes-Chambertin",
"Latricières-Chambertin",
"Mazis-Chambertin",
"Mazoyères-Chambertin",
"Ruchottes-Chambertin",
"Chambertin",
"Chambertin-Clos de Bèze",
"Clos de la Roche",
"Clos Saint-Denis",
"Clos de Tart",
"Clos des Lambrays",
"Bonnes-Mares",
"Musigny",
"Grands Echezeaux",
"Echezeaux",
"Clos de Vougeot",
"La Romanée",
"Romanée-Conti",
"La Tâche",
"Romanée-Saint-Vivant",
"Richebourg",
"La Grande Rue",
"Chorey-Les-Beaune",
"Côte de Beaune",
"Côte de Beaune-Villages",
"Saint-Romain",
"Pernand-Vergelesses",
"Ladoix",
"Aloxe-Corton",
"Savigny-Les-Beaune",
"Beaune",
"Pommard",
"Monthélie",
"Auxey-Duresses",
"Volnay",
"Meursault",
"Blagny",
"Saint-Aubin",
"Puligny-Montrachet",
"Chassagne-Montrachet",
"Santenay",
"Maranges",
"Charlemagne",
"Corton",
"Corton-Charlemagne",
"Montrachet",
"Chevalier-Montrachet",
"Bâtard-Montrachet",
"Bienvenues-Bâtard-Montrachet",
"Criots-Bâtard-Montrachet",
"Mâcon",
"Bouzeron",
"Rully",
"Mercurey",
"Givry",

    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
}

