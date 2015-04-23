Template.CategoryForm.events({
  'submit form': function (e, tmpl) {
    $('#mainModal').modal('hide');
  }
});

Template.CategoryForm.helpers({
});

Template.CategoryForm.onCreated(function (){
});

Template.CategoryForm.onRendered(function (){
  $('#mainModal').on('shown.bs.modal', function(e) {
    $('input[name=name]').focus();
  });
});

Template.CategoryForm.onDestroyed(function (){
});

