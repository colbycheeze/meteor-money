Tags = new Mongo.Collection('tags');

this.Schemas || (this.Schemas = {});
this.Schemas.Tags = new SimpleSchema({
  name: {
    type: String,
    label: "Name"
  }
});

Tags.attachSchema(this.Schemas.Tags);
