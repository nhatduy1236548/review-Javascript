let personAccount = {
    firstname: 'John',
    lastname: 'Doe',
    incomes: [
      { description: 'Salary', amount: 5000 },
      { description: 'Sale', amount: 2000 },
    ],
    expenses: [
      { description: 'Rent', amount: 1000 },
      { description: 'Groceries', amount: 500 },
    ],
  
    totalIncome: function() {
      return this.incomes.reduce((total, income) => total + income.amount, 0);
    },
  
    totalExpense: function() {
      return this.expenses.reduce((total, expense) => total + expense.amount, 0);
    },
  
    accountInfo: function() {
      return `${this.firstname} ${this.lastname} has an income of ${this.totalIncome()} and expenses of ${this.totalExpense()}`;
    },
  
    addIncome: function(description, amount) {
      this.incomes.push({ description: description, amount: amount });
    },
  
    addExpense: function(description, amount) {
      this.expenses.push({ description: description, amount: amount });
    },
  
    accountBalance: function() {
      return this.totalIncome() - this.totalExpense();
    }
  };
  