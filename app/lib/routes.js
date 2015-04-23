Router.onBeforeAction( function() {
  if (!Meteor.userId()) {
    CoffeeAlerts.error("Please Login first!");
    Router.go('home')
  } else {
    this.next();
  }
},
{
  except: ['home']
});

Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client',
});

Router.route('/transactions/new', {
  name: 'transaction.new',
  controller: 'TransactionController',
  action: 'create',
  where: 'client',
});

Router.route('/transactions/:_id', {
  name: 'transaction.show',
  controller: 'TransactionController',
  action: 'show',
  where: 'client',
});

Router.route('/transactions/:_id/edit', {
  name: 'transaction.edit',
  controller: 'TransactionController',
  action: 'edit',
  where: 'client'
});

Router.route('/transactions', {
  name: 'transactions',
  controller: 'TransactionsController',
  action: 'action',
  where: 'client'
});

Router.route('/about');

Router.route('/categories/new', {
  name: 'categories.new',
  controller: 'CategoriesController',
  action: 'create',
  where: 'client',
});

Router.route('categories', {
  name: 'categories',
  controller: 'CategoriesController',
  action: 'action',
  where: 'client'
});
