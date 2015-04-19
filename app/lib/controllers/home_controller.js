HomeController = RouteController.extend({
  waitOn: function() {
    return Meteor.subscribe('transactions');
  },

  action: function() {
    this.render('Home');
    this.render('NonexistentTemplateToTriggerLifeCycleHooks', {to: 'modalContent'});
  }
});
