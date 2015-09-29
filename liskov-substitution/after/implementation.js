import ATM from './ATM';

let stacks = [
  new USGeneralStack(100, 'dollar'),
  new USGeneralStack(50, 'dollar'),
  new USGeneralStack(20, 'dollar'),
  new USGeneralStack(10, 'dollar'),
  new USGeneralStack(5, 'dollar'),
  new USGeneralStack(1, 'dollar'),
  new YenStack(1, 'yen'),
  new YenStack(5, 'yen'),
  new YenStack(10, 'yen'),
  new YenStack(50, 'yen'),
  new YenStack(100, 'yen'),
  new YenStack(500, 'yen')
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
