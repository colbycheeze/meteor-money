/*****************************************************************************/
/* CreateTransaction: Event Handlers */
/*****************************************************************************/
Template.CreateTransaction.events({
  'click button': function() {
    Router.go('transaction.new');
  }
});

/*****************************************************************************/
/* CreateTransaction: Helpers */
/*****************************************************************************/
Template.CreateTransaction.helpers({
});

/*****************************************************************************/
/* CreateTransaction: Lifecycle Hooks */
/*****************************************************************************/
Template.CreateTransaction.created = function () {
};

Template.CreateTransaction.rendered = function () {
};

Template.CreateTransaction.destroyed = function () {
};
