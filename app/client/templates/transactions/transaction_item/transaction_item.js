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
  category: function() {
    if (this.categoryId === undefined) {
      return 'Unsorted';
    } else {
      return Categories.findOne({_id: this.categoryId}).name;
    }
  },

  description: function() {
    return s.titleize(this.description);
  }
});

/*****************************************************************************/
/* TransactionItem Life Cycle Hooks */
/*****************************************************************************/
Template.TransactionItem.onCreated(function (){
});

Template.TransactionItem.onRendered(function (){
});

Template.TransactionItem.onDestroyed(function (){
});
