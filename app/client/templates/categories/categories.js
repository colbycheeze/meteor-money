/*****************************************************************************/
/* Categories: Event Handlers */
/*****************************************************************************/
Template.Categories.events({
  'click .new-category': function() {
    Router.go('categories.new');
  }
});

/*****************************************************************************/
/* Categories: Helpers */
/*****************************************************************************/
Template.Categories.helpers({
  categories: function() {
    return Categories.find({parentId: ''});
  },

  children: function() {
    return Categories.find({parentId: this._id});
  }
});

/*****************************************************************************/
/* Categories: Lifecycle Hooks */
/*****************************************************************************/
Template.Categories.onCreated( function() {
  Session.set('currentRoute', 'categories');
});

Template.Categories.rendered = function () {
};

Template.Categories.destroyed = function () {
};
