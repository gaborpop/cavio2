Handlebars.registerHelper('compareStatus', function(n) {
  // fairly stupid pluralizer
  if (n === 'Bu') {
   return true;
  }
});