/*
  The "interface" for this object is quite concise and seems to conform well to ISP
    - We have everything we need at constuction time (though we could use some checks)
    - The methods are clear and straightforward to implement.
 */

class ATM {
  // DIP - Constructor Injection of a high-level abstraction
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
  // - EventType.addEventListener is a good example of following the OCP.
  // Also optimized for DIP (Plug-in pattern)
  registerAction(action, fn) {
    this[action] = fn.call(this);
  }
}

export default ATM;
