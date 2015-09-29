class ATM {
  constructor(stackManager) {
    this.stackManager = stackManager;
  }

  withdraw(amount, currency) {
    this.stackManager.withdraw(amount, currency);
  }

  deposit(amount, account) {
    //... Magic
  }

  // FOR NOW
  _ejectMoney(numOfBills) {
    console.log(`${numOfBills} $${this.billSize} bill(s) has/have been spit out`);
  }

  // One method for creating an extension point
  // - Element.prototype.addEventListener is a good example of following the OCP.
  registerAction(action, fn) {
    this[action] = fn.call(this);
  }
}

export default ATM;
