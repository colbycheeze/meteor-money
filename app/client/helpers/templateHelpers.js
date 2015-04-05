Template.registerHelper( "transactionsTotal", function(type) {
  var total = _.reduce(_.map(Transactions.find({userId: Meteor.userId(), type: type}).fetch(),
        function(doc) {
          //map
          return doc.amount
        }),
      function(memo, num){
        //reduce
        return memo + num;
      });

  return total;
});

Template.registerHelper( "formatCurrency", function(num) {
  return numeral(num).format('$0,0.00');
});

Template.registerHelper( "transactionsExist", function() {
  return Transactions.find({userId: Meteor.userId()}).count() >= 1;
});

Template.registerHelper( "transactions", function(type) {
  return Transactions.find({userId: Meteor.userId(), type: type}, {
    sort: { date: -1 }
  });
});

