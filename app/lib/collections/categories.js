Categories = new Mongo.Collection('categories');

this.Schemas || ( this.Schemas = {} );

this.Schemas.Categories = new SimpleSchema({
  userId: {
    type: String,
    autoValue: function() {
      return Meteor.userId();
    },
    label: "User ID"
  },

  name: {
    type: String,
    label: "Name"
  },

  parentId: {
    type:  String,
    autoValue: function() {
      return 'null';
    },
    label: "Parent Id"
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



