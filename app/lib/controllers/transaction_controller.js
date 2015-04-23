TransactionController = RouteController.extend({
  waitOn: function() {
    return [  Meteor.subscribe('transactions'), Meteor.subscribe('categories') ];
  },

  data: function () {
    return Transactions.findOne({_id: this.params._id});
  },

  show: function() {
    $('#mainModal').modal('show');
    this.render('Home');
    this.render('TransactionShow', {to: 'modalContent'});
  },

  create: function() {
    $('#mainModal').modal('show');
    this.render('Home');
    this.render('TransactionForm', {to: 'modalContent'});
  },

  edit: function() {
    this.render('TransactionEdit', {});
  }
});
