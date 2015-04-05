/*****************************************************************************/
/* TransactionsList: Event Handlers */
/*****************************************************************************/
Template.TransactionsList.events({
});

/*****************************************************************************/
/* TransactionsList: Helpers */
/*****************************************************************************/
Template.TransactionsList.helpers({
  virtualBalance: function() {
    var paymentsTotal = Blaze._globalHelpers.transactionsTotal("payment");
    var incomeTotal = Blaze._globalHelpers.transactionsTotal("income");

    // return incomeTotal.difference(paymentsTotal);
    return numeral(incomeTotal - paymentsTotal).format('$0,0.00');
  }
});

/*****************************************************************************/
/* TransactionsList: Lifecycle Hooks */
/*****************************************************************************/
Template.TransactionsList.created = function () {
};

Template.TransactionsList.rendered = function () {
};

Template.TransactionsList.destroyed = function () {
};
