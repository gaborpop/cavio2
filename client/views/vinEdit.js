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
      noteVin: $(e.target).find('[name=note_vin] :selected').text(),
      anneeVin: $(e.target).find('[name=annee_vin]').val()
    }

    Vins.update(currentVinId, {$set: vinProperties}, function(error) {
      if (error) {
        // display the error to the user
        alert(error.reason);
      } else {
        Meteor.Router.to('maCaveTemplate');
      }
    });
  },

  'click .delete': function(e) {
    e.preventDefault();

    if (confirm("Delete this post?")) {
      var currentVinId = Session.get('currentVinId');
      Vins.remove(currentVinId);
      Meteor.Router.to('maCaveTemplate');
    }
  }
});