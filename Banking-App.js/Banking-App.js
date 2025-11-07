class BankAccount {
  constructor(balance, transactions) {
    this.balance = 0.00;
    this.transactions = []
  }

  deposit(num) {
    if (num > 0) {
      this.transactions.push({type: "deposit", amount: num})
      let result = this.balance + numConversion(num);
      let displayVal = result.toLocaleFixed(2); //works
      this.balance = result;
      console.log(result, displayVal)
      display.textContent = `Successfully deposited $${num.toLocaleFixed(2)}`
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
      let result = this.balance - numConversion(num);
      let displayVal = result.toLocaleFixed(2);
      this.balance = result;
      display.textContent = `Successfully withdrew $${num.toLocaleFixed(2)}`
      currAmount.textContent = ` $${displayVal}`
    }
  }

  checkBalance() {
    display.textContent = `Current balance for all accounts: $${this.balance.toLocaleFixed(2)}`
  }

  listAllDeposits() {
    let deposits = []
    let depositsVal = [];
      for (let i = 0; i < this.transactions.length; i++) {
        if (this.transactions[i].type == "deposit") {
          deposits.push(` $${this.transactions[i].amount.toLocaleFixed(2)}`)
          depositsVal.push(this.transactions[i].amount)
        }
      }
      if (deposits.length === 0) {
        display.innerHTML = "No deposits have been made."
      } else {
        display.innerHTML = `Deposits:\n ${deposits}<br>
        Total value: $${depositsVal.reduce((a,b) => a + b).toLocaleFixed(2)}`
    }
    console.log(depositsVal);
  }

  listAllWithdrawals() {
    let withdrawals = []
    let withdrawalsVal = [];
    for (let i = 0; i < this.transactions.length; i++) {
      if (this.transactions[i].type == "withdraw") {
        withdrawals.push(` $${this.transactions[i].amount.toLocaleFixed(2)}`)
        withdrawalsVal.push(this.transactions[i].amount)
      }
    }
    if (withdrawals.length === 0) {
      display.innerHTML = "No withdrawals have been made."
    } else {
      display.innerHTML = `Withdrawals:\n ${withdrawals}<br>
      Total value: $${withdrawalsVal.reduce((a,b) => a+b).toLocaleFixed(2)}`
    }
  }
}

function numConversion(n) {
      return parseFloat(n.toFixed(2))
    }

Number.prototype.toLocaleFixed = function(n) {
  return this.toLocaleString(undefined, {
    minimumFractionDigits: n
  });
};

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

