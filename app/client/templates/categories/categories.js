/*****************************************************************************/
/* Categories: Event Handlers */
/*****************************************************************************/
Template.Categories.events({
});

/*****************************************************************************/
/* Categories: Helpers */
/*****************************************************************************/
Template.Categories.helpers({
  categories: function() {
    return Categories.find({userId: Meteor.userId()});
  }
});

/*****************************************************************************/
/* Categories: Lifecycle Hooks */
/*****************************************************************************/
Template.Categories.created = function () {
};

Template.Categories.rendered = function () {
};

Template.Categories.destroyed = function () {
};
