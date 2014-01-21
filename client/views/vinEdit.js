Template.vinEdit.helpers({
  vin: function() {
    return Vins.findOne(Session.get('currentVinId'));
  }
});

Template.vinEdit.events({
  'submit form': function(e) {
    e.preventDefault();

    var currentVinId = Session.get('currentVinId');

    var vinProperties = {
      nomVin: $(e.target).find('[name=nom_vin]').val(),
      regionVin: $(e.target).find('[name=region_vin] :selected').text(),
      couleurVin: $(e.target).find('[name=couleur_vin] :selected').text(),
      appellationVin: $(e.target).find('[name=appellation_vin]').val(),
      noteVin: $(e.target).find('[name=note_vin] :selected').text().split(' : ')[1],
      anneeVin: $(e.target).find('[name=annee_vin]').val(),
      commentaireVin: $(e.target).find('[name=commentaireVin]').val()
    }

    Vins.update(currentVinId, {$set: vinProperties}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {
        Router.go('maCaveTemplateListe');
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this post?")) {
      var currentVinId = Session.get('currentVinId');
      Vins.remove(currentVinId);
      Router.go('maCaveTemplateListe');
    }
  }
});

Template.vinEdit.rendered = function () {
  var availableTags = [
      "Ajaccio",
"Aloxe-corton",
"Alsace ou vin d'Alsace",
"Alsace grand cru",
"Anjou",
"Anjou-coteaux-de-la-loire",
"Anjou villages",
"Anjou villages brissac",
"Arbois",
"Auxey-duresses",
"Bandol",
"Banyuls",
"Banyuls grand cru",
"Barsac",
"Bâtard-montrachet",
"Béarn",
"Beaujolais",
"Beaujolais-villages",
"Beaumes-de-venise",
"Beaune",
"Bellet ou vin de Bellet",
"Bergerac",
"Bienvenues-bâtard-montrachet",
"Blagny",
"Blaye",
"Bonnes-mares",
"Bonnezeaux",
"Bordeaux",
"Bordeaux supérieur",
"Bourgogne",
"Bourgogne aligoté",
"Bourgogne-ordinaire ou bourgogne grand ordinaire",
"Bourgogne mousseux",
"Bourgogne passe-tout-grains",
"Bourgueil",
"Bouzeron",
"Brouilly",
"Bugey",
"Buzet",
"Cabardès",
"Cabernet d'Anjou",
"Cabernet de Saumur",
"Cadillac",
"Cahors",
"Canon-fronsac",
"Cassis",
"Cérons",
"Chablis",
"Chablis grand cru",
"Chambertin",
"Chambertin-clos-de-bèze",
"Chambolle-musigny",
"Champagne",
"Chapelle-chambertin",
"Charlemagne",
"Charmes-chambertin",
"Chassagne-montrachet",
"Château-chalon",
"Château-grillet",
"Châteaumeillant",
"Châteauneuf-du-pape",
"Châtillon-en-diois",
"Chénas",
"Chevalier-montrachet",
"Cheverny",
"Chinon",
"Chiroubles",
"Chorey-lès-beaune",
"Clairette de Bellegarde",
"Clairette de Die",
"Clairette du Languedoc",
"Clos-de-la-roche",
"Clos-de-tart",
"Clos-de-vougeot ou clos-vougeot",
"Clos-des-lambrays",
"Clos-saint-denis",
"Collioure",
"Condrieu",
"Corbières",
"Corbières-boutenac",
"Cornas",
"Corse ou vin de Corse",
"Corton",
"Corton-charlemagne",
"Costières-de-nîmes",
"Côte-de-beaune",
"Côte-de-beaune-villages",
"Côte-de-nuits-villages",
"Côte-de-brouilly",
"Côte-roannaise",
"Côte-rôtie",
"Coteaux-champenois",
"Coteaux-d'aix-en-provence",
"Coteaux-de-die",
"Coteaux-de-l'aubance",
"Coteaux-de-saumur",
"Coteaux-du-giennois",
"Coteaux-du-layon",
"Coteaux-du-loir",
"Coteaux-du-lyonnais",
"Coteaux-du-vendômois",
"Coteaux-varois-en-provence",
"Côtes-de-bergerac",
"Côtes-de-blaye",
"Côtes-de-bordeaux",
"Côtes-de-bordeaux-saint-macaire",
"Côtes-de-bourg ou bourg ou bourgeais",
"Côtes-de-duras",
"Côtes-de-montravel",
"Côtes-de-provence",
"Côtes-de-toul",
"Côtes-du-forez",
"Côtes-du-jura",
"Côtes-du-marmandais",
"Côtes-du-rhône",
"Côtes-du-rhône villages",
"Côtes-du-roussillon",
"Côtes-du-roussillon villages",
"Côtes-du-vivarais",
"Cour-cheverny",
"Crémant d'Alsace",
"Crémant de Bordeaux",
"Crémant de Bourgogne",
"Crémant de Die",
"Crémant de Limoux",
"Crémant de Loire",
"Crémant du Jura",
"Criots-bâtard-montrachet",
"Crozes-hermitage ou crozes-ermitage",
"Échezeaux",
"Entre-deux-mers",
"Faugères",
"Fiefs-vendéens",
"Fitou",
"Fixin",
"Fleurie",
"Fronsac",
"Fronton",
"Gaillac",
"Gaillac-premières-côtes",
"Gevrey-chambertin",
"Gigondas",
"Givry",
"Grands-échezeaux",
"Graves",
"Graves-de-vayres",
"Graves-supérieures",
"Grignan-les-adhémar",
"Griotte-chambertin",
"Haut-médoc",
"Haut-montravel",
"Haut-poitou",
"Hermitage ou ermitage",
"Irancy",
"Irouléguy",
"Jasnières",
"Juliénas",
"Jurançon",
"L'étoile",
"La-grande-rue",
"La-romanée",
"La-tâche",
"Ladoix",
"Lalande-de-pomerol",
"Languedoc",
"Latricières-chambertin",
"Les-baux-de-provence",
"Limoux",
"Lirac",
"Listrac-médoc",
"Loupiac",
"Luberon",
"Lussac-saint-émilion",
"Mâcon",
"Madiran",
"Malepère",
"Maranges",
"Marcillac",
"Margaux",
"Marsannay",
"Maury",
"Mazis-chambertin",
"Mazoyères-chambertin",
"Médoc",
"Menetou-salon",
"Mercurey",
"Meursault",
"Minervois",
"Minervois-la-livinière",
"Monbazillac",
"Montagne-saint-émilion",
"Montagny",
"Monthélie",
"Montlouis-sur-loire",
"Montrachet",
"Montravel",
"Morey-saint-denis",
"Morgon",
"Moselle4",
"Moulin-à-vent",
"Moulis ou moulis-en-médoc",
"Muscadet",
"Muscadet-coteaux-de-la-loire",
"Muscadet-côtes-de-grandlieu",
"Muscadet-sèvre-et-maine",
"Muscat de Beaumes-de-Venise",
"Muscat de Frontignan ou vin de Frontignan",
"Muscat de Lunel",
"Muscat de Mireval",
"Muscat de Rivesaltes",
"Muscat de Saint-Jean-de-Minervois",
"Muscat du Cap-Corse",
"Musigny",
"Néac",
"Nuits-saint-georges",
"Orléans",
"Orléans-cléry",
"Pacherenc-du-vic-bilh",
"Palette",
"Patrimonio",
"Pauillac",
"Pécharmant",
"Pernand-vergelesses",
"Pessac-léognan",
"Petit-chablis",
"Pierrevert",
"Pomerol",
"Pommard",
"Pouilly-fuissé",
"Pouilly-fumé ou blanc-fumé de Pouilly",
"Pouilly-loché",
"Pouilly-sur-loire",
"Pouilly-vinzelles",
"Premières-côtes-de-bordeaux",
"Puisseguin-saint-émilion",
"Puligny-montrachet",
"Quarts-de-chaume",
"Quincy",
"Rasteau",
"Régnié",
"Reuilly",
"Richebourg",
"Rivesaltes",
"Romanée-conti",
"Romanée-saint-vivant",
"Rosé d'Anjou",
"Rosé de Loire",
"Rosé des Riceys",
"Rosette",
"Roussette de Savoie",
"Roussette du Bugey",
"Ruchottes-chambertin",
"Rully",
"Saint-amour",
"Saint-aubin",
"Saint-bris",
"Saint-chinian",
"Saint-émilion",
"Saint-émilion grand cru",
"Saint-estèphe",
"Saint-georges-saint-émilion",
"Saint-joseph",
"Saint-julien",
"Saint-nicolas-de-bourgueil",
"Saint-péray",
"Saint-pourçain",
"Saint-romain",
"Saint-véran",
"Sainte-croix-du-mont",
"Sainte-foy-bordeaux",
"Sancerre",
"Santenay",
"Saumur",
"Saumur-champigny",
"Saussignac",
"Sauternes",
"Savennières",
"Savigny-lès-beaune",
"Seyssel",
"Tavel",
"Touraine",
"Touraine-noble-joué",
"Vacqueyras",
"Valençay",
"Ventoux",
"Vin de Savoie ou savoie",
"Vinsobres",
"Viré-clessé",
"Volnay",
"Vosne-romanée",
"Vougeot",
"Vouvray",


    ];
    $( "#tags" ).autocomplete({
      source: availableTags
    });
}