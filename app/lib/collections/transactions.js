Transactions = new Mongo.Collection('transactions');

this.Schemas || (this.Schemas = {});
this.Schemas.Transactions = new SimpleSchema({
  userId: {
    type: String,
    autoValue: function() {
      return Meteor.userId();
    },
    label: "User ID"
  },

  date: {
    type: Date,
    autoValue: function() {
      if (this.isInsert) {
        return new Date;
      } else if (this.isUpset) {
        return {$setOnInsert: new Date};
      } else {
        this.unset();
      }
    },
    label: "Date"
  },

  amount: {
    type: Number,
    decimal: true,
    min: 0,
    label: "Amount"
  },

  categoryId: {
    type: String,
    label: "Category ID",
    optional: true
  },

  tags: {
    type: [ String ],
    label: "Tag ID",
    optional: true
  }
});

Transactions.attachSchema(this.Schemas.Transactions);

// if (Meteor.isServer) {
//   Transactions.allow({
//     insert: function (userId, doc) {
//       return false;
//     },
//
//     update: function (userId, doc, fieldNames, modifier) {
//       return false;
//     },
//
//     remove: function (userId, doc) {
//       return false;
//     }
//   });
//
//   Transactions.deny({
//     insert: function (userId, doc) {
//       return true;
//     },
//
//     update: function (userId, doc, fieldNames, modifier) {
//       return true;
//     },
//
//     remove: function (userId, doc) {
//       return true;
//     }
//   });
// }

