Template.tableauVinTemplate.events({
  'submit form': function(e) {
    e.preventDefault();

    var vin = {
      nomVin: $(e.target).find('[name=nom_vin]').val(),
      regionVin: $(e.target).find('[name=region_vin] :selected').text(),
      couleurVin: $(e.target).find('[name=couleur_vin] :selected').text(),
      appellationVin: $(e.target).find('[name=appellation_vin]').val(),
      statusVin: 'nonBu',
      noteVin: $(e.target).find('[name=note_vin] :selected').text(),
      anneeVin: $(e.target).find('[name=annee_vin]').val()
    }

    Meteor.call('vin', vin, function(error, id) {
      

      Meteor.Router.to('maCaveTemplate', id);
    });
  }
});