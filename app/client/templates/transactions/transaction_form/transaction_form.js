/*****************************************************************************/
/* TransactionForm: Event Handlers */
/*****************************************************************************/
Template.TransactionForm.events({
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
/* TransactionForm Life Cycle Hooks */
/*****************************************************************************/
Template.TransactionForm.onCreated(function (){
});

Template.TransactionForm.onRendered(function (){
  $('#mainModal').on('shown.bs.modal', function(e) {
    $('input[name=description]').focus();
  });
});

Template.TransactionForm.onDestroyed(function (){
});

