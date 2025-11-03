//This challenge was to create a BankAccount class that utilises the "this" keyword and to define different actions that could be made when managing a bank account.

class BankAccount {
  constructor(balance, transactions) {
    this.balance = 0;
    this.transactions = []
  }

  deposit(num) {
    if (num > 0) {
      this.transactions.push({type: "deposit", amount: num})
      this.balance += num;
      return `Successfully deposited $${num}. New balance: $${this.balance}`
    } else {
      return "Deposit amount must be greater than zero."
    }
  }

  withdraw(num) {
    if (this.balance < num || num <= 0) {
      return "Insufficient balance or invalid amount."
    } else {
      this.transactions.push({type: "withdraw", amount: num})
      this.balance -= num;
      return `Successfully withdrew $${num}. New balance: $${this.balance}`
    }
  }

  checkBalance() {
    return `Current balance: $${this.balance}`
  }

  listAllDeposits() {
    let deposits = []
      for (let i = 0; i < this.transactions.length; i++) {
        if (this.transactions[i].type == "deposit") {
          deposits.push(this.transactions[i].amount)
        }
      }
    return `Deposits: ${deposits}`
  }

  listAllWithdrawals() {
    let withdrawals = []
    for (let i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type == "withdraw") {
        withdrawals.push(this.transactions[i].amount)
      }
    }
    return `Withdrawals: ${withdrawals}`
  }
}

let myAccount = new BankAccount();

console.log(myAccount.deposit(250));
console.log(myAccount.withdraw(50));
console.log(myAccount.deposit(350));
console.log(myAccount.withdraw(100));
console.log(myAccount.deposit(450));
console.log(myAccount.withdraw(300));
console.log(myAccount.listAllDeposits());
console.log(myAccount.listAllWithdrawals());
console.log(myAccount.transactions);

//ALL PASSED
