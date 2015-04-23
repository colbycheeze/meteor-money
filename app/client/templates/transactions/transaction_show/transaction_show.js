/*****************************************************************************/
/* TransactionShow: Event Handlers */
/*****************************************************************************/
Template.TransactionShow.events({
  'click [data-delete=transaction]': function(e, tmpl) {
    Session.set('isConfirmingDelete', true);
  }
});

/*****************************************************************************/
/* TransactionShow: Helpers */
/*****************************************************************************/
Template.TransactionShow.helpers({
  description: function() {
    return s.titleize(this.description);
  },

  deleteClicked: function() {
    return Session.get('isConfirmingDelete');
  }
});

/*****************************************************************************/
/* TransactionShow: Lifecycle Hooks */
/*****************************************************************************/
Template.TransactionShow.created = function () {
  Session.setDefault('isConfirmingDelete', false);
};

Template.TransactionShow.rendered = function () {
};

Template.TransactionShow.destroyed = function () {
};

/*****************************************************************************/
/* TransactionDelete: Event Handlers */
/*****************************************************************************/
Template.TransactionDelete.events({
  'click [data-confirm=delete]': function(e, tmpl) {
    Transactions.remove(this._id);
    $('#mainModal').modal('hide');
  },

  'click [data-cancel=delete]': function(e, tmpl) {
    Session.set('isConfirmingDelete', false);
  }
});

/*****************************************************************************/
/* TransactionDelete Life Cycle Hooks */
/*****************************************************************************/

Template.TransactionDelete.onDestroyed(function (){
  Session.set('isConfirmingDelete', false);
});


