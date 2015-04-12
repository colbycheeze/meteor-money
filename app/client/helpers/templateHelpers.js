Template.registerHelper( "transactionsTotal", function(type) {
  var transactions = Transactions.find({userId: Meteor.userId(), type: type}).fetch();

  if ( !transactions.length )
    return 0;

  var total = _.reduce(_.map(transactions,
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

Template.registerHelper( "formatDate", function(date) {
  return moment(date).format("MMM D");
});

Template.registerHelper( "transactionsExist", function() {
  return Transactions.findOne({userId: Meteor.userId()}) !== undefined;
});

Template.registerHelper( "transactions", function(type) {
  return Transactions.find({userId: Meteor.userId(), type: type}, {
    sort: { date: -1 }
  });
});

Template.registerHelper( "isActiveRoute", function(routeName) {
  if (Router.current().route.getName() === routeName) {
    return 'active';
  }
});

