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

