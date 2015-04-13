CategoriesController = RouteController.extend({
  subscriptions: function () {
    Meteor.subscribe('categories');
  },

  data: function () {
    return Categories.find();
  },

  action: function () {
    this.render('Categories', { /* data: {} */});
  }
});
