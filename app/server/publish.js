/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */

Meteor.publish('transactions', function (/* args */) {
  if (!this.userId) return this.ready();

  return Transactions.find({userId: this.userId});
});
