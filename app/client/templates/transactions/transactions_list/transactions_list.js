/*****************************************************************************/
/* TransactionsList: Event Handlers */
/*****************************************************************************/
Template.TransactionsList.events({
});

/*****************************************************************************/
/* TransactionsList: Helpers */
/*****************************************************************************/
Template.TransactionsList.helpers({
  transactionsExist: function() {
    return Transactions.find({userId: Meteor.userId()}).count() >= 1;
  },

  transactions: function() {
    return Transactions.find({userId: Meteor.userId()}, {
      sort: { date: -1 }
    });
  },

  transactionsTotal: function() {
    var total = _.reduce(_.map(Transactions.find({userId: Meteor.userId()}).fetch(),
          function(doc) {
            //map
            return doc.amount
          }),
        function(memo, num){
          //reduce
          return memo + num;
        });

    return numeral(total).format('$0,0.00');
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
