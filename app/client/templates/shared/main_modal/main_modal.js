/*****************************************************************************/
/* MainModal Life Cycle Hooks */
/*****************************************************************************/
Template.MainModal.onCreated( function() {
  var hooksObject = {
    onSuccess: function() {
      $('#mainModal').modal('hide');
    }
  }

  AutoForm.addHooks(
      ['insertTransactionForm', 'insertCategoryForm'], hooksObject
      );
});

Template.MainModal.onRendered(function () {
  var mousePosY = -1;
  $(document).mousemove( function(event) {
    mousePosY = event.pageY;
  });

  var centerModal = function(e) {
    if (e.namespace === 'bs.modal')
      $('.modal-content').css("margin-top", Math.round(mousePosY));
  }

  $('#mainModal').on('show.bs.modal', centerModal);
});

Template.MainModal.onRendered(function() {
  $('#mainModal').on('hidden.bs.modal', function () {
    Router.go(Session.get('currentRoute'));
  });
});

