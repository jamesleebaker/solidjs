import MoneyStack from './MoneyStack';

class ATM {
  // This can still be optimized via DIP (Do we need to depend on MoneyStack?)
  constructor(denominations) {
    this.stacks = [];

    denominations.forEach(bill => {
      let stack = new MoneyStack(bill);
      let prevStack = this.stacks[this.stacks.length - 1];

      if(prevStack) {
        prevStack.setNextStack(stack);
      }

      this.stacks.push(stack);
    });

    this.currentStack = this.stacks[0];
  }

  withdraw(amount) {
    return this.currentStack.withdraw(amount);
  }

  // One method for creating an extension point
  // - EventType.addEventListener is a good example of following the OCP.
  // Also optimized for DIP (Plug-in pattern)
  registerAction(action, fn) {
    this[action] = fn.call(this);
  }
}

export default ATM;
