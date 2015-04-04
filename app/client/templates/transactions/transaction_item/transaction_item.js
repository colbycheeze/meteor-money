/*****************************************************************************/
/* TransactionItem: Event Handlers */
/*****************************************************************************/
Template.TransactionItem.events({
});

/*****************************************************************************/
/* TransactionItem: Helpers */
/*****************************************************************************/
Template.TransactionItem.helpers({
  date: function() {
    return moment(this.date).format("MM/DD YY");;
  },

  amount: function() {
    return numeral(this.amount).format('$0,0.00');
  }
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
