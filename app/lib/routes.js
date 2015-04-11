Router.configure({
  layoutTemplate: 'MasterLayout',
  loadingTemplate: 'Loading',
  notFoundTemplate: 'NotFound'
});

Router.route('/', {
  name: 'home',
  controller: 'HomeController',
  action: 'action',
  where: 'client'
});

Router.route('/transactions/:_id', {
  name: 'transaction.show',
  controller: 'TransactionController',
  action: 'show',
  where: 'client'
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


Router.route('categories', {
  name: 'categories',
  controller: 'CategoriesController',
  action: 'action',
  where: 'client'
});
