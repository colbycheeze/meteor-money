Meteor.publish('transaction', function (id) {
  if (!this.userId) return this.ready();

  return Transactions.find({_id: id});
});

Meteor.publish('transactions', function (/* args */) {
  if (!this.userId) return this.ready();

  return Transactions.find({userId: this.userId});
});


Meteor.publish('categories', function (/* args */) {
  if (!this.userId) return this.ready();

  return Categories.find({userId: this.userId});
});
