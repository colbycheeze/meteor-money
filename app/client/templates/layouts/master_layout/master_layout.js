/*****************************************************************************/
/* MasterLayout Life Cycle Hooks */
/*****************************************************************************/
Template.MasterLayout.onCreated(function (){
});

Template.MasterLayout.onRendered(function (){
  $('#mainModal').on('hidden.bs.modal', function () {
    Router.go(Session.get('currentRoute'));
  });
});

Template.MasterLayout.onRendered( function() {
  var hooksObject = {
    onSuccess: function() {
      $('#mainModal').modal('hide');
    }
  }

  AutoForm.addHooks(
    ['insertTransactionForm', 'insertCategoryForm'], hooksObject
  );
});

Template.MasterLayout.onDestroyed(function (){
});

