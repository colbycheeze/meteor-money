/*****************************************************************************/
/* TransactionForm: Event Handlers */
/*****************************************************************************/
Template.TransactionForm.events({
  'submit form': function(e, tmpl) {
    $('#mainModal').modal('hide');
  }
});

/*****************************************************************************/
/* TransactionForm: Helpers */
/*****************************************************************************/
Template.TransactionForm.helpers({

  formDoc: function() {
    return {
      date: new Date,
      type: "expense"
    }
  }
});

/*****************************************************************************/
/* TransactionForm: Lifecycle Hooks */
/*****************************************************************************/
Template.TransactionForm.created = function () {
};

Template.TransactionForm.rendered = function () {
  $('#mainModal').on('shown.bs.modal', function () {
    $('input[name="description"]').focus();
  });
};

Template.TransactionForm.destroyed = function () {
};
