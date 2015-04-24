
/*****************************************************************************/
/* MainModal Life Cycle Hooks */
/*****************************************************************************/
Template.MainModal.onCreated(function (){
});

Template.MainModal.onRendered(function (){
  $('#mainModal').on('hidden.bs.modal', function () {
    Router.go(Session.get('currentRoute'));
  });
});

Template.MainModal.onRendered( function() {
  var hooksObject = {
    onSuccess: function() {
      $('#mainModal').modal('hide');
    }
  }

  AutoForm.addHooks(
    ['insertTransactionForm', 'insertCategoryForm'], hooksObject
  );
});

Template.MainModal.onDestroyed(function (){
});

