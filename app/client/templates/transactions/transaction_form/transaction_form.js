/*****************************************************************************/
/* TransactionForm: Event Handlers */
/*****************************************************************************/
Template.TransactionForm.events({
  'submit form': function(e, tmpl) {
    $('#addNewTransactionModal').modal('hide');
  }
});

/*****************************************************************************/
/* TransactionForm: Helpers */
/*****************************************************************************/
Template.TransactionForm.helpers({

  formDoc: function() {
    return {
      date: new Date,
      type: "payment"
    }
  }
});

/*****************************************************************************/
/* TransactionForm: Lifecycle Hooks */
/*****************************************************************************/
Template.TransactionForm.created = function () {
};

Template.TransactionForm.rendered = function () {
};

Template.TransactionForm.destroyed = function () {
};
