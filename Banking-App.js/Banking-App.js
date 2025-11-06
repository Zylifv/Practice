class BankAccount {
  constructor(balance, transactions) {
    this.balance = 0.00;
    this.transactions = []
  }

  deposit(num) {
    if (num > 0) {
      this.transactions.push({type: "deposit", amount: num})
      let result = parseFloat((this.balance + num).toFixed(2));
      let displayVal = (this.balance + num).toFixed(2); //works
      this.balance = result;
      console.log(result, displayVal)
      display.textContent = `Successfully deposited $${num.toFixed(2)}`
      currAmount.textContent = ` $${displayVal}`
    } else {
      display.textContent = "Deposit amount must be greater than zero."
    }
  }

  withdraw(num) {
    if (this.balance < num || num <= 0) {
      display.textContent = "Insufficient balance or invalid amount."
    } else {
      this.transactions.push({type: "withdraw", amount: num})
      let result = parseFloat((this.balance - num).toFixed(2));
      let displayVal = (this.balance - num).toFixed(2);
      this.balance = result;
      display.textContent = `Successfully withdrew $${num.toFixed(2)}`
      currAmount.textContent = ` $${displayVal}`
    }
  }

  checkBalance() {
    display.textContent = `Current balance for all accounts: $${this.balance}`
  }

  listAllDeposits() {
    let deposits = []
      for (let i = 0; i < this.transactions.length; i++) {
        if (this.transactions[i].type == "deposit") {
          deposits.push(` $${this.transactions[i].amount.toFixed(2)}`)
        }
      }
      if (deposits.length === 0) {
        display.innerHTML = "No deposits have been made."
      } else {
        display.innerHTML = `Deposits:\n ${deposits}`
    }
  }

  listAllWithdrawals() {
    let withdrawals = []
    for (let i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type == "withdraw") {
        withdrawals.push(` $${this.transactions[i].amount.toFixed(2)}`)
      }
    }
    if (withdrawals.length === 0) {
      display.innerHTML = "No withdrawals have been made."
    } else {
      display.innerHTML = `Withdrawals:\n ${withdrawals.toFixed(2)}`
    }
  }
}

const myAccount = new BankAccount();
let currAmount = document.getElementById("curr-amount");
const withdrawBtn = document.getElementById("withdrawal-btn");
const depositBtn = document.getElementById("deposit-btn");
const checkBalanceBtn = document.getElementById("balance-btn");
const checkTransactionsBtn = document.getElementById("transactions-btn");
const checkDepositsBtn = document.getElementById("deposit-transactions");
const checkWithdrawalsBtn = document.getElementById("withdrawal-transactions");
const display = document.getElementById("display");
const input = document.getElementById("value-input");
const transactionOptionsDisplay = document.getElementById("transactions-options");
const returnBtn = document.getElementById("return-btn");


transactionOptionsDisplay.style.display = "none";


withdrawBtn.addEventListener("click", () => {
  myAccount.withdraw(Number(input.value))
  input.value = "";
});

depositBtn.addEventListener("click", () => {
  myAccount.deposit(Number(input.value))
  input.value = "";
});

checkBalanceBtn.addEventListener("click", () => {
  myAccount.checkBalance();
});

checkTransactionsBtn.addEventListener("click", () => { 
  withdrawBtn.style.display = "none";
  depositBtn.style.display = "none";
  checkBalanceBtn.style.display = "none";
  checkTransactionsBtn.style.display = "none";
  transactionOptionsDisplay.style.display = "block";
  myAccount.checkBalance();
});

returnBtn.addEventListener("click", () => {
  withdrawBtn.style.display = "block";
  depositBtn.style.display = "block";
  checkBalanceBtn.style.display = "block";
  checkTransactionsBtn.style.display = "block";
  transactionOptionsDisplay.style.display = "none";
  display.textContent = "";
});

checkDepositsBtn.addEventListener("click", () => {
  myAccount.listAllDeposits();
});

checkWithdrawalsBtn.addEventListener("click", () => {
  myAccount.listAllWithdrawals();
});

let validate = function(e) {
  let t = e.value;
  e.value = t.indexOf(".") >= 0 ? t.slice(0, t.indexOf(".") + 3) : t;
}

document.getElementById("no-product").addEventListener("click", () => {
  document.getElementById("add-product").style.display = "none";
});

document.getElementById("yes-product").addEventListener("click", () => {
  document.getElementById("add-product").innerHTML = "This service is currently unavailable, sorry for any inconvenience.";
  setInterval(function() {
    document.getElementById("add-product").style.display = "none";
  }, 5000);
});
