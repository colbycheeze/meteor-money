/*****************************************************************************/
/* TransactionShow: Event Handlers */
/*****************************************************************************/
Template.TransactionShow.events({
  'click [data-delete=transaction]': function(e, tmpl) {
    Session.set('isConfirmingDelete', true);
  }
});

/*****************************************************************************/
/* TransactionShow: Helpers */
/*****************************************************************************/
Template.TransactionShow.helpers({
  category: function() {
    return Categories.findOne(this.categoryId).name;
  },

  categories: function() {
    var categoryArr = [];

    Categories.find().fetch().forEach( function(category) {
      categoryArr.push({id: category._id, text: category.name});
    });

    return categoryArr;
  },

  description: function() {
    return s.titleize(this.description);
  },

  deleteClicked: function() {
    return Session.get('isConfirmingDelete');
  }
});

/*****************************************************************************/
/* TransactionShow Life Cycle Hooks */
/*****************************************************************************/
Template.TransactionShow.onCreated(function (){
  Session.setDefault('isConfirmingDelete', false);
});

Template.TransactionShow.onRendered(function (){
  //TODO: Date selector chooses the PREVIOUS day??
  $('.editable').editable({
    source: Template.TransactionShow.__helpers.get('categories')(),
    mode: 'inline',
    display: function() { return false; },

    success: function(response, newValue) {
      var fieldName = $(this).data('name');
      var fieldId = $(this).data('pk');
      var set = {}; set[fieldName] = newValue;

      if(!Transactions.simpleSchema().namedContext().validateOne(set, fieldName))
        return "Invalid";

      Transactions.update(fieldId, {$set: set});
    }
  });
});

Template.TransactionShow.onDestroyed(function (){
});

/*****************************************************************************/
/* TransactionDelete: Event Handlers */
/*****************************************************************************/
Template.TransactionDelete.events({
  'click [data-confirm=delete]': function(e, tmpl) {
    Transactions.remove(this._id);
    $('#mainModal').modal('hide');
  },

  'click [data-cancel=delete]': function(e, tmpl) {
    Session.set('isConfirmingDelete', false);
  }
});

/*****************************************************************************/
/* TransactionDelete Life Cycle Hooks */
/*****************************************************************************/

Template.TransactionDelete.onDestroyed(function (){
  Session.set('isConfirmingDelete', false);
});




