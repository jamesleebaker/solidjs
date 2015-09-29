class ATM {
  constructor(stackManager) {
    // Also optimized for DIP
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
  // - EventType.addEventListener is a good example of following the OCP.
  // Also optimized for DIP (Plug-in pattern)
  registerAction(action, fn) {
    this[action] = fn.call(this);
  }
}

export default ATM;
