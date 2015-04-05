Categories = new Mongo.Collection('categories');

this.Schemas || ( this.Schemas = {} );

this.Schemas.Categories = new SimpleSchema({
  name: {
    type: String,
    autoValue: function() {
      return "unsorted";
    },
    label: "Name"
  }
});

Categories.attachSchema(this.Schemas.Categories);
