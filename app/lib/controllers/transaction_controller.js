TransactionController = RouteController.extend({
  waitOn: function() {
    return Meteor.subscribe('transaction', this.params._id);
  },

  data: function () {
    return Transactions.findOne({_id: this.params._id});
  },

  show: function() {
    this.render('TransactionShow', {to: 'modal'});
  },

  edit: function() {
    this.render('TransactionEdit', {});
  }
});
