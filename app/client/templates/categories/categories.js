Template.Categories.events({
  'click .new-category': function() {
    Router.go('categories.new');
  }
});

Template.Categories.helpers({
  categories: function() {
    return Categories.find({parentId: ''});
  },

  children: function() {
    return Categories.find({parentId: this._id});
  }
});

/*****************************************************************************/
/* Categories Life Cycle Hooks */
/*****************************************************************************/
Template.Categories.onCreated(function (){
  Session.set('currentRoute', 'categories');
});

Template.Categories.onRendered(function (){
});

Template.Categories.onDestroyed(function (){
});

