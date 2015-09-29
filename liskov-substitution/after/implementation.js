import ATM from './ATM';
import USGeneralStack from './USGeneralStack';
import YenStack from './YenStack';

let stacks = [
  new USGeneralStack(100),
  new USGeneralStack(50),
  new USGeneralStack(20),
  new USGeneralStack(10),
  new USGeneralStack(5),
  new USGeneralStack(1),
  new YenStack(1),
  new YenStack(5),
  new YenStack(10),
  new YenStack(50),
  new YenStack(100),
  new YenStack(500)
];

let stackManager = new StackManager(stacks);
let atm = new ATM(stackManager);

let bills = atm.withdraw(186);
console.log(`${bills} bill(s) has/have been spit out`);
/* outputs:
    100
    50
    20
    10
    5
    1
*/

bills = atm.withdraw(72);
console.log(`${bills} bill(s) has/have been spit out`);
/* outputs:
    50
    20
    1
    1
*/
