CategoriesController = RouteController.extend({
  waitOn: function() {
    return Meteor.subscribe('categories');
  },

  data: function () {
    return Categories.find();
  },

  action: function () {
    this.render('Categories');
    this.render('NonexistentTemplateToTriggerLifeCycleHooks', {to: 'modalContent'});
  },

  create: function() {
    this.render('Categories');
    this.render('CategoryForm', {to: 'modalContent'});
    $('#mainModal').modal('show');
  }
});
