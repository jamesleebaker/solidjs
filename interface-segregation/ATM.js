/*
  The "interface" for this object is quite concise and seems to conform well to ISP
    - We have everything we need at constuction time (though we could use some checks)
    - The methods are clear and straightforward to implement.
 */

class ATM {
  constructor(stackManager) {
    this.stackManager = stackManager;
  }

  withdraw(amount, currency) {
    return this.stackManager.withdraw(amount, currency);
  }

  deposit(amount, account) {
    //... Magic
  }

  registerAction(action, fn) {
    this[action] = fn.call(this);
  }
}

export default ATM;
