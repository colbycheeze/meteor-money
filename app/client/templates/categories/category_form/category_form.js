Template.CategoryForm.events({
  'submit form': function (e, tmpl) {
    $('#mainModal').modal('hide');
  }
});

Template.CategoryForm.helpers({
  formDoc: function() {
    return {
      name: 'unsorted'
    }
  }
});

Template.CategoryForm.onCreated(function (){
});

Template.CategoryForm.onRendered(function (){
  $('#mainModal').on('shown.bs.modal', function () {
    $('input[name="name"]').focus();
    $('input[name="name"]').select();
  });
});

Template.CategoryForm.onDestroyed(function (){
});

