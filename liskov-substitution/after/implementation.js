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

atm.withdraw(186);
/* outputs:
    100
    50
    20
    10
    5
    1
*/

atm.withdraw(72);
/* outputs:
    50
    20
    1
    1
*/
