/*****************************************************************************/
/* TransactionsList: Event Handlers */
/*****************************************************************************/
Template.TransactionsList.events({
  'click .reactive-table tbody tr': function(e, tmpl) {
    e.stopPropagation();
    Router.go('transaction.show', {_id: this._id});
  },

  'click [data-addNew=modal]': function() {
    Router.go('transaction.new');
  }
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
  },

  settings: function() {
    return {
      collection: Transactions.find(),

      fields: [
      {
        key: 'date',
        label: 'Date',
        fn: function(value) {
          return Blaze._globalHelpers.formatDate(value);
        }
      },

      {
        key: 'description',
        label: 'Description',
        fn: function(value) {
          return s.titleize(value);
        }
      },

      {
        key: 'categoryId',
        label: 'Category',
        fn: function(value, object) {
          if (value === null) {
            return 'Uncategorized';
          } else {
            return Categories.findOne({_id: value}).name;
          }
        }
      },

      {
        key: 'amount',
        label: 'Amount',
        headerClass: 'text-right',
        cellClass: 'text-right',
        fn: function(value, object) {
          var correctAmount = ( object.type === 'expense' ? value * -1 : value );
          return Blaze._globalHelpers.formatCurrency(correctAmount);
        }
      }
      ]
    }
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
