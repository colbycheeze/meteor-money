/**
 * Meteor.publish('items', function (param1, param2) {
 *  this.ready();
 * });
 */

Meteor.publish('transactions', function (/* args */) {
  return Transactions.find();
});
