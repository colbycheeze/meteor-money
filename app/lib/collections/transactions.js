Transactions = new Mongo.Collection('transactions');

this.Schemas || (this.Schemas = {});
this.Schemas.Transactions = new SimpleSchema({
  userId: {
    label: "User ID",
    type: String,

    autoValue: function() {
      if ( this.isSet ){
        return this.value;
      } else {
        return Meteor.userId();
      }
    }
  },

  date: {
    label: "Date",
    type: Date,
    autoValue: function() {
      if ( this.isSet ) {
        console.log('date given ', this.value);
        return this.value;
      } else {
        return new Date;
      }
    },

    autoform: {
      type: "bootstrap-datepicker"
    }
  },

  type: {
    label: "Type",
    type: String,
    allowedValues: ['expense', 'income'],

    autoform: {
      type: "select-radio-inline",
      options: [
        {label: "Expense", value: "expense"},
        {label: "Income", value: "income"}
      ]
    }
  },

  description: {
    label: "Description",
    type: String
  },

  amount: {
    label: "Amount",
    type: Number,
    decimal: true,
    min: 0
  },

  categoryId: {
    label: 'Category',
    type: String,
    optional: true,

    autoValue: function() {
      if ( this.isSet ){
        return this.value;
      } else {
        var uncat = Categories.findOne({userId: this.userId, name: 'Uncategorized'});

        if (uncat === undefined) {
          return Categories.insert({userId: this.userId, name: 'Uncategorized', parentId: ''});
        } else {
          return uncat._id;
        }
      }
    },

    autoform: {
      label: "Category",
      type: "select2",
      selectOnBlur: true,

      // TODO: Figure out nesting of categories
      options: function() {
        returnable = [];
        _.map(Categories.find({parentId: ''}).fetch(), function(doc) {
          returnable.push ({
            class: 'parent',
            label: doc.name,
            value: doc._id
          });

          _.map(Categories.find({
            parentId: doc._id
          }).fetch(), function(doc2) {
            returnable.push ({
              class: 'child',
              label: doc2.name,
              value: doc2._id
            });
          });
        });
        return returnable;
      }
    }
  },

  tags: {
    label: "Tag ID",
    type: [ String ],
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
}

