HomeController = RouteController.extend({
  waitOn: function() {
    Meteor.subscribe('transactions');
  },

  action: function() {
    this.render('Home');
  }
});
