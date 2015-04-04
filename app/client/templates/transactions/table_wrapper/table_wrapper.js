/*****************************************************************************/
/* TableWrapper: Event Handlers */
/*****************************************************************************/
Template.TableWrapper.events({
});

/*****************************************************************************/
/* TableWrapper: Helpers */
/*****************************************************************************/
Template.TableWrapper.helpers({
  transactionsExist: function() {
    return Transactions.find({userId: Meteor.userId()}).count() >= 1;
  }
});

/*****************************************************************************/
/* TableWrapper: Lifecycle Hooks */
/*****************************************************************************/
Template.TableWrapper.created = function () {
};

Template.TableWrapper.rendered = function () {
};

Template.TableWrapper.destroyed = function () {
};
