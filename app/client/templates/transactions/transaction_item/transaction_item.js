/*****************************************************************************/
/* TransactionItem: Event Handlers */
/*****************************************************************************/
Template.TransactionItem.events({
  'click tr': function(e, tmpl) {
    e.stopPropagation();
    Router.go('transaction.show', {_id: tmpl.data._id});
  }
});

/*****************************************************************************/
/* TransactionItem: Helpers */
/*****************************************************************************/
Template.TransactionItem.helpers({
});

/*****************************************************************************/
/* TransactionItem: Lifecycle Hooks */
/*****************************************************************************/
Template.TransactionItem.created = function () {
};

Template.TransactionItem.rendered = function () {
};

Template.TransactionItem.destroyed = function () {
};
