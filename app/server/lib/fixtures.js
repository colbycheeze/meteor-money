;(function () {

  Meteor.startup(function () {

    if (Meteor.users.find().fetch().length === 0) {
      var id = Accounts.createUser({
        username: 'colbycheeze',
        password: "foobar",
        profile: { name: 'Colby Williams' }
      });

      user = Meteor.users.findOne();

      Transactions.insert({
        date: new Date(),
        description: "Car Loan",
        amount: 307.68,
        type: 'expense',
        userId: id
      });

      console.log("Transaction: " + Transactions.findOne()._id);

      Transactions.insert({
        date: new Date(),
        description: "Rent",
        amount: 1375.00,
        type: 'expense',
        userId: id
      });
      Transactions.insert({
        date: new Date(),
        description: "James side of water bill",
        amount: 38.21,
        type: 'income',
        userId: id
      });
      Transactions.insert({
        date: new Date(),
        description: "Bonus",
        amount: 300.00,
        type: 'income',
        userId: id
      });
      Transactions.insert({
        date: new Date(),
        description: "Initial Balance",
        amount: 1000.00,
        type: 'income',
        userId: id
      });
      Transactions.insert({
        date: new Date(),
        description: "Paycheck",
        amount: 1500.00,
        type: 'income',
        userId: id
      });

    }
  });
})();
