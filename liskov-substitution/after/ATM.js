class ATM {
  constructor(stackManager) {
    // Also optimized for DIP
    this.stackManager = stackManager;
  }

  withdraw(amount, currency) {
    return this.stackManager.withdraw(amount, currency);
  }

  deposit(amount, account) {
    //... Magic
  }

  // One method for creating an extension point
  // - EventType.addEventListener is a good example of following the OCP.
  // Also optimized for DIP (Plug-in pattern)
  registerAction(action, fn) {
    this[action] = fn.call(this);
  }
}

export default ATM;
