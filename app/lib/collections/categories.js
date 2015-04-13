Categories = new Mongo.Collection('categories');

this.Schemas || ( this.Schemas = {} );

this.Schemas.Categories = new SimpleSchema({
  name: {
    type: String,
    autoValue: function() {
      return "unsorted";
    },
    label: "Name"
  },

  parentId: {
    type:  String,
    autoValue: function() {
      return undefined;
    },
    label: "Parent Id"
  }
});

Categories.attachSchema(this.Schemas.Categories);
