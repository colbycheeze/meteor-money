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
    var expenseTotal = Blaze._globalHelpers.transactionsTotal("expense");
    var incomeTotal = Blaze._globalHelpers.transactionsTotal("income");
    var virtualBalance = numeral(incomeTotal - expenseTotal);

    return Blaze._globalHelpers.formatCurrency(virtualBalance);
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
