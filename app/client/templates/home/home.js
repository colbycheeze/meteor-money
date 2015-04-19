/*****************************************************************************/
/* Home: Event Handlers */
/*****************************************************************************/
Template.Home.events({
});

/*****************************************************************************/
/* Home: Helpers */
/*****************************************************************************/
Template.Home.helpers({
  siteTitle: function() {
    return Meteor.settings.public.title;
  }
});

/*****************************************************************************/
/* Home: Lifecycle Hooks */
/*****************************************************************************/
Template.Home.onCreated( function() {
  Session.set('currentRoute', 'home');
});

Template.Home.rendered = function () {
};

Template.Home.destroyed = function () {
};
