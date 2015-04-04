HomeController = RouteController.extend({
  layoutTemplate: 'MasterLayout',

  subscriptions: function() {
    this.subscribe('transactions')
  },

  action: function() {
    this.render('Home');
  }
});
