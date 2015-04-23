Transactions = new Mongo.Collection('transactions');

this.Schemas || (this.Schemas = {});
this.Schemas.Transactions = new SimpleSchema({
  userId: {
    type: String,
    autoValue: function() {
      if ( this.isSet ){
        return this.value;
      } else {
        return Meteor.userId();
      }
    },
    label: "User ID"
  },

  date: {
    type: Date,
    autoform: {
      type: "bootstrap-datepicker"
    },
    label: "Date"
  },

  type: {
    type: String,
    label: "Type",
    allowedValues: ['expense', 'income'],
    autoform: {
      options: [
        {label: "Expense", value: "expense"},
        {label: "Income", value: "income"}
      ]
    }
  },

  description: {
    type: String,
    label: "Description"
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


if (Meteor.isServer) {
  Transactions.allow({
    insert: function (userId, doc) {
      return userid === doc.userId;
    },

    update: function (userId, doc, fieldNames, modifier) {
      return userid === doc.userId;
    },

    remove: function (userId, doc) {
      return userid === doc.userId;
    }
  });

  // Transactions.deny({
  //   insert: function (userId, doc) {
  //     return true;
  //   },
  //
  //   update: function (userId, doc, fieldNames, modifier) {
  //     return true;
  //   },
  //
  //   remove: function (userId, doc) {
  //     return true;
  //   }
  // });
}

