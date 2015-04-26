Categories = new Mongo.Collection('categories');

this.Schemas || ( this.Schemas = {} );

this.Schemas.Categories = new SimpleSchema({
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

  name: {
    label: "Name",
    type: String,
    unique: true
  },

  parentId: {
    label: "Parent Category",
    type:  String,

    autoValue: function() {
      if ( this.isSet ){
        return this.value;
      } else {
        return '';
      }
    },

    autoform: {
      label: "Parent Category",
      selectOnBlur: true,
      type: "select2",
        // options: [{ label: 'Label', value: 1 }]
      options: nestCategories()
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



