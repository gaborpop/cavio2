(function(){

var templatevins = [
{
    region:"Alsace",
    appellation:"Alsace \"Grand Cru\"",
    couleur:"Blanc",
    cavemin:5,
    cavemax:10,
    caveautres:"jusqu'à 20 ans selon Millésime",
    cepage:"",
    tempmin:8,
    tempmax:10
  },
  {
    region:"Alsace",
    appellation:"Côtes de Toul",
    couleur:"Blanc",
    cavemin:2,
    cavemax:3,
    caveautres:"",
    cepage:"Aubin, Auxerrois",
    tempmin:8,
    tempmax:10
  },
  {
    region:"Alsace",
    appellation:"Côtes de Toul",
    couleur:"Rouge",
    cavemin:2,
    cavemax:3,
    caveautres:"quelques années",
    cepage:"Pinot Noir",
    tempmin:15,
    tempmax:18
  },
  {
    region:"Alsace",
    appellation:"Moselle",
    couleur:"Rouge",
    cavemin:2,
    cavemax:5,
    caveautres:"jusqu'à 10 ans",
    cepage:"Pinot Noir",
    tempmin:12,
    tempmax:14
  },
  {
    region:"Alsace",
    appellation:"Moselle",
    couleur:"Rosé",
    cavemin:0,
    cavemax:1,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:8,
    tempmax:10
  },
  {
    region:"Alsace",
    appellation:"Moselle",
    couleur:"Blanc",
    cavemin:0,
    cavemax:1,
    caveautres:"",
    cepage:"Auxerrois",
    tempmin:8,
    tempmax:10
  },
  {
    region:"Alsace",
    appellation:"Alsace - Rieseling",
    couleur:"Blanc",
    cavemin:2,
    cavemax:10,
    caveautres:"au-delà suivant le millésime",
    cepage:"Riesling",
    tempmin:8,
    tempmax:10
  },
  {
    region:"Alsace",
    appellation:"Alsace - Gewurztraminer",
    couleur:"Blanc",
    cavemin:2,
    cavemax:15,
    caveautres:"au-delà suivant le millésime et mention \"Vendanges tardies\" ou \"Sélection grain nobles\"",
    cepage:"Gewurztraminer",
    tempmin:8,
    tempmax:10
  },
  {
    region:"Alsace",
    appellation:"Alsace - Pinot Gris",
    couleur:"Blanc",
    cavemin:2,
    cavemax:10,
    caveautres:"",
    cepage:"Pinot Gris",
    tempmin:8,
    tempmax:10
  },
  {
    region:"Alsace",
    appellation:"Alsace - Muscat",
    couleur:"Blanc",
    cavemin:1,
    cavemax:4,
    caveautres:"",
    cepage:"Muscat",
    tempmin:8,
    tempmax:10
  },
  {
    region:"Alsace",
    appellation:"Alsace - Pinot Noir",
    couleur:"Rouge",
    cavemin:1,
    cavemax:2,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:14,
    tempmax:16
  },
  {
    region:"Alsace",
    appellation:"Alsace - Sylvaner",
    couleur:"Blanc",
    cavemin:1,
    cavemax:2,
    caveautres:"",
    cepage:"Sylvaner",
    tempmin:8,
    tempmax:10
  },
  {
    region:"Alsace",
    appellation:"Alsace - Pinot Blanc",
    couleur:"Blanc",
    cavemin:1,
    cavemax:2,
    caveautres:"",
    cepage:"Pinot Blanc",
    tempmin:8,
    tempmax:10
  },
  {
    region:"Bourgogne",
    appellation:"Coteaux Bourguignons",
    couleur:"Blanc",
    cavemin:1,
    cavemax:1,
    caveautres:"à boire jeunes",
    cepage:"Aligoté, Chardonnay",
    tempmin:10,
    tempmax:12
  },
  {
    region:"Bourgogne",
    appellation:"Coteaux Bourguignons",
    couleur:"Rouge",
    cavemin:1,
    cavemax:1,
    caveautres:"à boire jeunes",
    cepage:"Gamay, Pinot noir",
    tempmin:14,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Bourgogne",
    couleur:"Blanc",
    cavemin:1,
    cavemax:1,
    caveautres:"à boire jeunes",
    cepage:"Chardonnay, Pinot blanc",
    tempmin:10,
    tempmax:12
  },
  {
    region:"Bourgogne",
    appellation:"Bourgogne",
    couleur:"Rouge",
    cavemin:1,
    cavemax:1,
    caveautres:"à boire jeunes",
    cepage:"Pinot Noir",
    tempmin:15,
    tempmax:17
  },
  {
    region:"Bourgogne",
    appellation:"Bourgogne Aligoté",
    couleur:"Blanc",
    cavemin:1,
    cavemax:1,
    caveautres:"à boire jeunes",
    cepage:"Aligoté",
    tempmin:10,
    tempmax:12
  },
  {
    region:"Bourgogne",
    appellation:"Bourgogne Passe-tout-grains",
    couleur:"Rouge",
    cavemin:1,
    cavemax:2,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:12,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Bourgogne mousseux",
    couleur:"Rouge",
    cavemin:1,
    cavemax:1,
    caveautres:"",
    cepage:"Gamay noir",
    tempmin:10,
    tempmax:12
  },
  {
    region:"Bourgogne",
    appellation:"Crémant de Bourgogne",
    couleur:"Blanc",
    cavemin:1,
    cavemax:2,
    caveautres:"",
    cepage:"Aligoté, Chardonnay",
    tempmin:8,
    tempmax:10
  },
  {
    region:"Bourgogne",
    appellation:"Petit Chablis",
    couleur:"Blanc",
    cavemin:1,
    cavemax:2,
    caveautres:"",
    cepage:"Chardonnay",
    tempmin:8,
    tempmax:10
  },
  {
    region:"Bourgogne",
    appellation:"Chablis",
    couleur:"Blanc",
    cavemin:1,
    cavemax:2,
    caveautres:"8 à 10 ans pour les vins avec mention \"premier cru\"",
    cepage:"Chardonnay",
    tempmin:10,
    tempmax:12
  },
  {
    region:"Bourgogne",
    appellation:"Chablis \"Grand Cru\"",
    couleur:"Blanc",
    cavemin:1,
    cavemax:10,
    caveautres:"",
    cepage:"Chardonnay",
    tempmin:12,
    tempmax:14
  },
  {
    region:"Bourgogne",
    appellation:"Irancy",
    couleur:"Rouge",
    cavemin:2,
    cavemax:10,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:14,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Saint-Bris",
    couleur:"Blanc",
    cavemin:1,
    cavemax:5,
    caveautres:"",
    cepage:"Sauvignon",
    tempmin:8,
    tempmax:12
  },
  {
    region:"Bourgogne",
    appellation:"Côte de Nuits-VIllages ou Vins fins de la Côte de Nuits",
    couleur:"Rouge",
    cavemin:2,
    cavemax:10,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:16,
    tempmax:18
  },
  {
    region:"Bourgogne",
    appellation:"Marsannay",
    couleur:"Rouge",
    cavemin:5,
    cavemax:10,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:15,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Marsannay",
    couleur:"Blanc",
    cavemin:2,
    cavemax:10,
    caveautres:"",
    cepage:"Chardonnay, Pinot blanc",
    tempmin:10,
    tempmax:12
  },
  {
    region:"Bourgogne",
    appellation:"Fixin",
    couleur:"Rouge",
    cavemin:4,
    cavemax:10,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:15,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Fixin",
    couleur:"Blanc",
    cavemin:4,
    cavemax:10,
    caveautres:"",
    cepage:"Chardonnay, Pinot blanc",
    tempmin:null,
    tempmax:null
  },
  {
    region:"Bourgogne",
    appellation:"Gevrey-Chambertin",
    couleur:"Rouge",
    cavemin:2,
    cavemax:10,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:15,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Morey-Saint-Denis",
    couleur:"Rouge",
    cavemin:3,
    cavemax:15,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:15,
    tempmax:17
  },
  {
    region:"Bourgogne",
    appellation:"Morey-Saint-Denis",
    couleur:"Blanc",
    cavemin:3,
    cavemax:15,
    caveautres:"",
    cepage:"Chardonnay, Pinot blanc",
    tempmin:10,
    tempmax:12
  },
  {
    region:"Bourgogne",
    appellation:"Chambolle-Musigny",
    couleur:"Rouge",
    cavemin:6,
    cavemax:12,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:15,
    tempmax:17
  },
  {
    region:"Bourgogne",
    appellation:"Vougeot",
    couleur:"Rouge",
    cavemin:4,
    cavemax:15,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:15,
    tempmax:17
  },
  {
    region:"Bourgogne",
    appellation:"Vougeot",
    couleur:"Blanc",
    cavemin:4,
    cavemax:15,
    caveautres:"",
    cepage:"Chardonnay, Pinot blanc",
    tempmin:10,
    tempmax:12
  },
  {
    region:"Bourgogne",
    appellation:"Vosne-Romanée",
    couleur:"Rouge",
    cavemin:5,
    cavemax:15,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:16,
    tempmax:18
  },
  {
    region:"Bourgogne",
    appellation:"Nuit-Saint-Georges",
    couleur:"Rouge",
    cavemin:2,
    cavemax:10,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:16,
    tempmax:18
  },
  {
    region:"Bourgogne",
    appellation:"Nuit-Saint-Georges",
    couleur:"Blanc",
    cavemin:2,
    cavemax:10,
    caveautres:"",
    cepage:"Chardonnay, Pinot blanc",
    tempmin:10,
    tempmax:12
  },
  {
    region:"Bourgogne",
    appellation:"Chapelle-Chambertin",
    couleur:"Rouge",
    cavemin:2,
    cavemax:20,
    caveautres:"voir plus selon millésime",
    cepage:"Pinot Noir",
    tempmin:16,
    tempmax:18
  },
  {
    region:"Bourgogne",
    appellation:"Charmes-Chambertin",
    couleur:"Rouge",
    cavemin:2,
    cavemax:20,
    caveautres:"voir plus selon millésime",
    cepage:"Pinot Noir",
    tempmin:16,
    tempmax:18
  },
  {
    region:"Bourgogne",
    appellation:"Griottes-Chambertin",
    couleur:"Rouge",
    cavemin:2,
    cavemax:20,
    caveautres:"voir plus selon millésime",
    cepage:"Pinot Noir",
    tempmin:16,
    tempmax:18
  },
  {
    region:"Bourgogne",
    appellation:"Latricières-Chambertin",
    couleur:"Rouge",
    cavemin:2,
    cavemax:20,
    caveautres:"voir plus selon millésime",
    cepage:"Pinot Noir",
    tempmin:16,
    tempmax:18
  },
  {
    region:"Bourgogne",
    appellation:"Mazis-Chambertin",
    couleur:"Rouge",
    cavemin:2,
    cavemax:20,
    caveautres:"voir plus selon millésime",
    cepage:"Pinot Noir",
    tempmin:16,
    tempmax:18
  },
  {
    region:"Bourgogne",
    appellation:"Mazoyères-Chambertin",
    couleur:"Rouge",
    cavemin:2,
    cavemax:20,
    caveautres:"voir plus selon millésime",
    cepage:"Pinot Noir",
    tempmin:16,
    tempmax:18
  },
  {
    region:"Bourgogne",
    appellation:"Ruchottes-Chambertin",
    couleur:"Rouge",
    cavemin:2,
    cavemax:20,
    caveautres:"voir plus selon millésime",
    cepage:"Pinot Noir",
    tempmin:16,
    tempmax:18
  },
  {
    region:"Bourgogne",
    appellation:"Chambertin",
    couleur:"Rouge",
    cavemin:2,
    cavemax:20,
    caveautres:"voir plus selon millésime",
    cepage:"Pinot Noir",
    tempmin:16,
    tempmax:18
  },
  {
    region:"Bourgogne",
    appellation:"Chambertin-Clos de Bèze",
    couleur:"Rouge",
    cavemin:2,
    cavemax:20,
    caveautres:"voir plus selon millésime",
    cepage:"Pinot Noir",
    tempmin:16,
    tempmax:18
  },
  {
    region:"Bourgogne",
    appellation:"Clos de la Roche",
    couleur:"Rouge",
    cavemin:5,
    cavemax:20,
    caveautres:"voir plus selon millésime",
    cepage:"Pinot Noir",
    tempmin:15,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Clos Saint-Denis",
    couleur:"Rouge",
    cavemin:5,
    cavemax:20,
    caveautres:"voir plus selon millésime",
    cepage:"Pinot Noir",
    tempmin:15,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Clos de Tart",
    couleur:"Rouge",
    cavemin:5,
    cavemax:20,
    caveautres:"voir plus selon millésime",
    cepage:"Pinot Noir",
    tempmin:15,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Clos des Lambrays",
    couleur:"Rouge",
    cavemin:5,
    cavemax:20,
    caveautres:"voir plus selon millésime",
    cepage:"Pinot Noir",
    tempmin:15,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Bonnes-Mares",
    couleur:"Rouge",
    cavemin:4,
    cavemax:15,
    caveautres:"voir plus selon millésime",
    cepage:"Pinot Noir",
    tempmin:15,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Musigny",
    couleur:"Rouge",
    cavemin:4,
    cavemax:15,
    caveautres:"voir plus selon millésime",
    cepage:"Pinot Noir",
    tempmin:16,
    tempmax:18
  },
  {
    region:"Bourgogne",
    appellation:"Grands Echezeaux",
    couleur:"Rouge",
    cavemin:5,
    cavemax:15,
    caveautres:"voir plus selon millésime",
    cepage:"Pinot Noir",
    tempmin:16,
    tempmax:18
  },
  {
    region:"Bourgogne",
    appellation:"Echezeaux",
    couleur:"Rouge",
    cavemin:5,
    cavemax:15,
    caveautres:"voir plus selon millésime",
    cepage:"Pinot Noir",
    tempmin:16,
    tempmax:18
  },
  {
    region:"Bourgogne",
    appellation:"Clos de Vougeot",
    couleur:"Rouge",
    cavemin:8,
    cavemax:15,
    caveautres:"voir plus selon millésime",
    cepage:"Pinot Noir",
    tempmin:16,
    tempmax:18
  },
  {
    region:"Bourgogne",
    appellation:"La Romanée",
    couleur:"Rouge",
    cavemin:8,
    cavemax:15,
    caveautres:"voir plus selon millésime",
    cepage:"Pinot Noir",
    tempmin:16,
    tempmax:18
  },
  {
    region:"Bourgogne",
    appellation:"Romanée-Conti",
    couleur:"Rouge",
    cavemin:8,
    cavemax:15,
    caveautres:"voir plus selon millésime",
    cepage:"Pinot Noir",
    tempmin:16,
    tempmax:18
  },
  {
    region:"Bourgogne",
    appellation:"La Tâche",
    couleur:"Rouge",
    cavemin:8,
    cavemax:15,
    caveautres:"voir plus selon millésime",
    cepage:"Pinot Noir",
    tempmin:16,
    tempmax:18
  },
  {
    region:"Bourgogne",
    appellation:"Romanée-Saint-Vivant",
    couleur:"Rouge",
    cavemin:8,
    cavemax:15,
    caveautres:"voir plus selon millésime",
    cepage:"Pinot Noir",
    tempmin:16,
    tempmax:18
  },
  {
    region:"Bourgogne",
    appellation:"Richebourg",
    couleur:"Rouge",
    cavemin:8,
    cavemax:15,
    caveautres:"voir plus selon millésime",
    cepage:"Pinot Noir",
    tempmin:16,
    tempmax:18
  },
  {
    region:"Bourgogne",
    appellation:"La Grande Rue",
    couleur:"Rouge",
    cavemin:8,
    cavemax:15,
    caveautres:"voir plus selon millésime",
    cepage:"Pinot Noir",
    tempmin:16,
    tempmax:18
  },
  {
    region:"Bourgogne",
    appellation:"Chorey-Les-Beaune",
    couleur:"Rouge",
    cavemin:null,
    cavemax:null,
    caveautres:"A boire relativement jeune",
    cepage:"Pinot Noir",
    tempmin:14,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Côte de Beaune",
    couleur:"Rouge",
    cavemin:2,
    cavemax:8,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:16,
    tempmax:18
  },
  {
    region:"Bourgogne",
    appellation:"Côte de Beaune",
    couleur:"Blanc",
    cavemin:2,
    cavemax:8,
    caveautres:"",
    cepage:"Chardonnay, Pinot blanc",
    tempmin:12,
    tempmax:14
  },
  {
    region:"Bourgogne",
    appellation:"Côte de Beaune-Villages",
    couleur:"Rouge",
    cavemin:2,
    cavemax:8,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:14,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Saint-Romain",
    couleur:"Rouge",
    cavemin:3,
    cavemax:8,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:14,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Saint-Romain",
    couleur:"Blanc",
    cavemin:3,
    cavemax:8,
    caveautres:"",
    cepage:"Chardonnay, Pinot blanc",
    tempmin:12,
    tempmax:14
  },
  {
    region:"Bourgogne",
    appellation:"Pernand-Vergelesses",
    couleur:"Rouge",
    cavemin:3,
    cavemax:12,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:14,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Pernand-Vergelesses",
    couleur:"Blanc",
    cavemin:3,
    cavemax:12,
    caveautres:"",
    cepage:"Chardonnay, Pinot blanc",
    tempmin:12,
    tempmax:14
  },
  {
    region:"Bourgogne",
    appellation:"Ladoix",
    couleur:"Rouge",
    cavemin:2,
    cavemax:10,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:14,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Ladoix",
    couleur:"Blanc",
    cavemin:2,
    cavemax:10,
    caveautres:"",
    cepage:"Chardonnay, Pinot blanc",
    tempmin:12,
    tempmax:14
  },
  {
    region:"Bourgogne",
    appellation:"Aloxe-Corton",
    couleur:"Rouge",
    cavemin:3,
    cavemax:10,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:14,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Aloxe-Corton",
    couleur:"Blanc",
    cavemin:3,
    cavemax:10,
    caveautres:"",
    cepage:"Chardonnay, Pinot blanc",
    tempmin:12,
    tempmax:14
  },
  {
    region:"Bourgogne",
    appellation:"Savigny-Les-Beaune",
    couleur:"Rouge",
    cavemin:3,
    cavemax:12,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:14,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Savigny-Les-Beaune",
    couleur:"Blanc",
    cavemin:3,
    cavemax:12,
    caveautres:"",
    cepage:"Chardonnay, Pinot blanc",
    tempmin:10,
    tempmax:12
  },
  {
    region:"Bourgogne",
    appellation:"Beaune",
    couleur:"Rouge",
    cavemin:2,
    cavemax:10,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:14,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Beaune",
    couleur:"Blanc",
    cavemin:2,
    cavemax:10,
    caveautres:"",
    cepage:"Chardonnay, Pinot blanc",
    tempmin:10,
    tempmax:12
  },
  {
    region:"Bourgogne",
    appellation:"Pommard",
    couleur:"Rouge",
    cavemin:3,
    cavemax:10,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:14,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Monthélie",
    couleur:"Rouge",
    cavemin:3,
    cavemax:10,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:15,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Monthélie",
    couleur:"Blanc",
    cavemin:3,
    cavemax:10,
    caveautres:"",
    cepage:"Chardonnay, Pinot blanc",
    tempmin:10,
    tempmax:12
  },
  {
    region:"Bourgogne",
    appellation:"Auxey-Duresses",
    couleur:"Rouge",
    cavemin:3,
    cavemax:10,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:14,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Auxey-Duresses",
    couleur:"Blanc",
    cavemin:3,
    cavemax:10,
    caveautres:"",
    cepage:"Chardonnay, Pinot blanc",
    tempmin:10,
    tempmax:12
  },
  {
    region:"Bourgogne",
    appellation:"Volnay",
    couleur:"Rouge",
    cavemin:2,
    cavemax:10,
    caveautres:"voire 20 ans pour les \"premier cru\"",
    cepage:"Pinot Noir",
    tempmin:14,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Meursault",
    couleur:"Rouge",
    cavemin:2,
    cavemax:12,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:14,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Meursault",
    couleur:"Blanc",
    cavemin:2,
    cavemax:12,
    caveautres:"",
    cepage:"Chardonnay, Pinot blanc",
    tempmin:12,
    tempmax:14
  },
  {
    region:"Bourgogne",
    appellation:"Blagny",
    couleur:"Rouge",
    cavemin:2,
    cavemax:10,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:14,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Saint-Aubin",
    couleur:"Rouge",
    cavemin:2,
    cavemax:10,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:14,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Saint-Aubin",
    couleur:"Blanc",
    cavemin:2,
    cavemax:10,
    caveautres:"",
    cepage:"Chardonnay, Pinot blanc",
    tempmin:12,
    tempmax:14
  },
  {
    region:"Bourgogne",
    appellation:"Puligny-Montrachet",
    couleur:"Rouge",
    cavemin:2,
    cavemax:8,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:14,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Puligny-Montrachet",
    couleur:"Blanc",
    cavemin:2,
    cavemax:8,
    caveautres:"",
    cepage:"Chardonnay, Pinot blanc",
    tempmin:12,
    tempmax:13
  },
  {
    region:"Bourgogne",
    appellation:"Chassagne-Montrachet",
    couleur:"Rouge",
    cavemin:3,
    cavemax:10,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:14,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Chassagne-Montrachet",
    couleur:"Blanc",
    cavemin:3,
    cavemax:10,
    caveautres:"",
    cepage:"Chardonnay, Pinot blanc",
    tempmin:12,
    tempmax:13
  },
  {
    region:"Bourgogne",
    appellation:"Santenay",
    couleur:"Rouge",
    cavemin:3,
    cavemax:10,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:14,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Santenay",
    couleur:"Blanc",
    cavemin:3,
    cavemax:10,
    caveautres:"",
    cepage:"Chardonnay, Pinot blanc",
    tempmin:14,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Maranges",
    couleur:"Rouge",
    cavemin:2,
    cavemax:8,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:16,
    tempmax:17
  },
  {
    region:"Bourgogne",
    appellation:"Maranges",
    couleur:"Blanc",
    cavemin:2,
    cavemax:8,
    caveautres:"",
    cepage:"Chardonnay, Pinot blanc",
    tempmin:12,
    tempmax:14
  },
  {
    region:"Bourgogne",
    appellation:"Charlemagne",
    couleur:"Blanc",
    cavemin:5,
    cavemax:10,
    caveautres:"",
    cepage:"Chardonnay",
    tempmin:12,
    tempmax:14
  },
  {
    region:"Bourgogne",
    appellation:"Corton",
    couleur:"Rouge",
    cavemin:4,
    cavemax:15,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:14,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Corton",
    couleur:"Blanc",
    cavemin:4,
    cavemax:10,
    caveautres:"",
    cepage:"Chardonnay",
    tempmin:12,
    tempmax:14
  },
  {
    region:"Bourgogne",
    appellation:"Corton-Charlemagne",
    couleur:"Blanc",
    cavemin:5,
    cavemax:10,
    caveautres:"",
    cepage:"Chardonnay",
    tempmin:12,
    tempmax:14
  },
  {
    region:"Bourgogne",
    appellation:"Montrachet",
    couleur:"Blanc",
    cavemin:null,
    cavemax:null,
    caveautres:"Plus de 10 ans",
    cepage:"Chardonnay",
    tempmin:12,
    tempmax:14
  },
  {
    region:"Bourgogne",
    appellation:"Chevalier-Montrachet",
    couleur:"Blanc",
    cavemin:null,
    cavemax:null,
    caveautres:"Plus de 10 ans",
    cepage:"Chardonnay",
    tempmin:12,
    tempmax:14
  },
  {
    region:"Bourgogne",
    appellation:"Bâtard-Montrachet",
    couleur:"Blanc",
    cavemin:null,
    cavemax:null,
    caveautres:"Plus de 10 ans",
    cepage:"Chardonnay",
    tempmin:12,
    tempmax:14
  },
  {
    region:"Bourgogne",
    appellation:"Bienvenues-Bâtard-Montrachet",
    couleur:"Blanc",
    cavemin:null,
    cavemax:null,
    caveautres:"Plus de 10 ans",
    cepage:"Chardonnay",
    tempmin:12,
    tempmax:14
  },
  {
    region:"Bourgogne",
    appellation:"Criots-Bâtard-Montrachet",
    couleur:"Blanc",
    cavemin:null,
    cavemax:null,
    caveautres:"Plus de 10 ans",
    cepage:"Chardonnay",
    tempmin:12,
    tempmax:14
  },
  {
    region:"Bourgogne",
    appellation:"Mâcon",
    couleur:"Rouge",
    cavemin:1,
    cavemax:2,
    caveautres:"",
    cepage:"Gamay Noir, Pinot Noir",
    tempmin:12,
    tempmax:14
  },
  {
    region:"Bourgogne",
    appellation:"Mâcon",
    couleur:"Blanc",
    cavemin:1,
    cavemax:2,
    caveautres:"",
    cepage:"Chardonnay",
    tempmin:8,
    tempmax:10
  },
  {
    region:"Bourgogne",
    appellation:"Bouzeron",
    couleur:"Blanc",
    cavemin:1,
    cavemax:5,
    caveautres:"",
    cepage:"Aligoté",
    tempmin:10,
    tempmax:12
  },
  {
    region:"Bourgogne",
    appellation:"Rully",
    couleur:"Rouge",
    cavemin:2,
    cavemax:6,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:14,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Rully",
    couleur:"Blanc",
    cavemin:2,
    cavemax:4,
    caveautres:"",
    cepage:"Chardonnay",
    tempmin:12,
    tempmax:14
  },
  {
    region:"Bourgogne",
    appellation:"Mercurey",
    couleur:"Rouge",
    cavemin:3,
    cavemax:10,
    caveautres:"",
    cepage:"Pinot Noir",
    tempmin:14,
    tempmax:16
  },
  {
    region:"Bourgogne",
    appellation:"Mercurey",
    couleur:"Blanc",
    cavemin:2,
    cavemax:8,
    caveautres:"",
    cepage:"Chardonnay",
    tempmin:12,
    tempmax:14
  }
];

if (Dbvins.find().count() === 0) {
  for (n=0;n<templatevins.length;n++) {
  
  Dbvins.insert({
    region : templatevins[n].region,
    appellation : templatevins[n].appellation,
    couleur : templatevins[n].couleur,
    cavemin : templatevins[n].cavemin,
    cavemax : templatevins[n].cavemax,
    caveautres : templatevins[n].caveautres,
    cepage : templatevins[n].cepage,
    tempmin : templatevins[n].tempmin,
    tempmax : templatevins[n].tempmax
  });

  }; 
  
};



 

})();
