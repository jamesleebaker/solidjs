import ATM from './ATM';

var atm = new ATM();
atm.withdraw(186);
/* outputs:
    1 0 bill(s) has/have been spit out
    1  bill(s) has/have been spit out
    1  bill(s) has/have been spit out
    1  bill(s) has/have been spit out
    1  bill(s) has/have been spit out
    1  bill(s) has/have been spit out
*/
atm.withdraw(72);
