;(function () {

  Meteor.startup(function () {

    if (Meteor.users.find().fetch().length === 0) {

      //Create Users

      console.log('-- Creating Users --');
      var id = Accounts.createUser({
        username: 'colbycheeze',
        password: "foobar",
        profile: { name: 'Colby Williams' }
      });

      //Create Categories

      console.log('-- Creating Categories --');
      var uncatId = Categories.insert({
        name: 'Uncategorized',
        parentId: '',
        userId: id
      });

      var homeCatId = Categories.insert({
        name: 'Home',
        parentId: '',
        userId: id
      });

      Categories.insert({
        name: 'Utilities',
        parentId: homeCatId,
        userId: id
      });

      var autoCatId = Categories.insert({
        name: 'Auto',
        parentId: '',
        userId: id
      });

      Categories.insert({
        name: 'Food',
        parentId: '',
        userId: id
      });

      //Create Transactions

      console.log('-- Creating Transactions --');
      Transactions.insert({
        date: new Date(),
        description: "Car Loan",
        amount: 307.68,
        type: 'expense',
        categoryId: autoCatId,
        userId: id
      });

      Transactions.insert({
        date: new Date(),
        description: "Rent",
        amount: 1375.00,
        type: 'expense',
        categoryId: homeCatId,
        userId: id
      });
      Transactions.insert({
        date: new Date(),
        description: "James side of water bill",
        amount: 38.21,
        type: 'income',
        categoryId: homeCatId,
        userId: id
      });
      Transactions.insert({
        date: new Date(),
        description: "Bonus",
        amount: 300.00,
        type: 'income',
        categoryId: uncatId,
        userId: id
      });
      Transactions.insert({
        date: new Date(),
        description: "Initial Balance",
        amount: 1000.00,
        type: 'income',
        categoryId: uncatId,
        userId: id
      });
      Transactions.insert({
        date: new Date(),
        description: "Paycheck",
        amount: 1500.00,
        type: 'income',
        categoryId: uncatId,
        userId: id
      });
    }
  });
})();

