Categories = new Mongo.Collection('categories');

this.Schemas || ( this.Schemas = {} );

this.Schemas.Categories = new SimpleSchema({
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

  name: {
    type: String,
    unique: true,
    label: "Name"
  },

  parentId: {
    type:  String,
    autoValue: function() {
      if ( this.isSet ){
        return this.value;
      } else {
        return '';
      }
    },
    autoform: {
      type: "select",
      options: function() {
        return _.map(Categories.find({parentId: ''}).fetch(), function(doc) {
          return {
            label: doc.name,
            value: doc._id
          };
        });
      },
      selectOnBlur: true,
      label: "Parent Id"
    }
  }
});

Categories.attachSchema(this.Schemas.Categories);

if (Meteor.isServer) {
  Categories.allow({
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



