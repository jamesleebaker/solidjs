/*
  The "interface" for this object is quite concise and seems to conform well to ISP
    - We have everything we need at constuction time (though we could use some checks)
    - The methods are clear and straightforward to implement.
 */

class StackManager {
  constructor(stacks) {
    this.stacks = stacks || [];

    stacks.forEach(stack => {
      let prevStack = this.stacks[this.stacks.length - 1];

      if(prevStack) {
        prevStack.setNextStack(stack);
      }

      this.stacks.push(stack);
    });

    this.currentStack = this.stacks[this.stacks.length - 1];

  }

  withdraw(amount, currency) {
    if(currency !== this.currentStack.currency) {
      this.setStack(currency);
    }

    return this.currentStack.withdraw(amount);
  }

  setStack(currency) {
    this.currentStack = this.getStack(currency);
  }

  getStack(currency) {
    let results = [];

    if(!currency || (this.currentStack.currency === currency)) {
      return this.currentStack;
    }

    this.stacks.filter((stack) => {
      if(currency === stack.currency) {
        return results.push(stack);
      }
    });

    return results[0];
  }
}
