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
    this.stackManager.withdraw(amount, currency);
  }

  deposit(amount, account) {
    //... Magic
  }

  // FOR NOW
  _ejectMoney(numOfBills) {
    console.log(`${numOfBills} $${this.billSize} bill(s) has/have been spit out`);
  }

  registerAction(action, fn) {
    this[action] = fn.call(this);
  }
}

export default ATM;
