Template.nouveauVin.events({
  'submit form': function(e) {
    e.preventDefault();
    Meteor.subscribe('dbvins');
		
    var dbvinselectionne = Dbvins.findOne({appellation : $(e.target).find('[name=appellation_vin]').val(), couleur : $(e.target).find('[name=couleur_vin] :selected').text()});
    if (dbvinselectionne) {
      var vin = {
      nomVin: $(e.target).find('[name=nom_vin]').val(),
      regionVin: $(e.target).find('[name=region_vin] :selected').text(),
      couleurVin: $(e.target).find('[name=couleur_vin] :selected').text(),
      appellationVin: $(e.target).find('[name=appellation_vin]').val(),
      statusVin: 'nonBu',
      noteVin: $(e.target).find('[name=note_vin] :selected').text().split(' : ')[1],
      anneeVin: $(e.target).find('[name=annee_vin]').val(),
      commentaireVin: $(e.target).find('[name=commentaireVin]').val(),
      cavemin: dbvinselectionne["cavemin"],
      cavemax: dbvinselectionne["cavemax"],
      tempmin: dbvinselectionne["tempmin"],
      tempmax: dbvinselectionne["tempmax"],
      cepage: dbvinselectionne["cepage"]
      }
      
      
    }
    else{
       var vin = {
      nomVin: $(e.target).find('[name=nom_vin]').val(),
      regionVin: $(e.target).find('[name=region_vin] :selected').text(),
      couleurVin: $(e.target).find('[name=couleur_vin] :selected').text(),
      appellationVin: $(e.target).find('[name=appellation_vin]').val(),
      statusVin: 'nonBu',
      noteVin: $(e.target).find('[name=note_vin] :selected').text().split(' : ')[1],
      anneeVin: $(e.target).find('[name=annee_vin]').val(),
      commentaireVin: $(e.target).find('[name=commentaireVin]').val(),
      cavemin: '?',
      cavemax: '?',
      tempmin: '?',
      tempmax: '?',
      cepage: '?'
      }
      
      
      
    }
      
    
    $(e.target).find('[name=nom_vin]').val(""),
    $(e.target).find('[name=region_vin] :selected').text("Bordeaux"),
    $(e.target).find('[name=couleur_vin] :selected').text("Rouge"),
    $(e.target).find('[name=appellation_vin]').val(""),
      
    $(e.target).find('[name=note_vin] :selected').text("Note : 1"),
    $(e.target).find('[name=annee_vin]').val(""),
    $(e.target).find('[name=commentaireVin]').val("")
          
    
    
    
      
    Meteor.call('vin', vin, function(error, id) {
      

      Router.go('maCaveTemplateListe', id);
    });


  }
});
Template.nouveauVin.rendered = function () {
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