Categories = new Mongo.Collection('categories');

this.Schemas || ( this.Schemas = {} );

this.Schemas.Categories = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  }
});

Categories.attachSchema(this.Schemas.Categories);
