Template.MasterLayout.helpers({
});

Template.MasterLayout.events({
});

Template.MasterLayout.rendered = function () {
  $('#mainModal').on('hidden.bs.modal', function () {
    Router.go(Session.get('currentRoute'));
  });
};
