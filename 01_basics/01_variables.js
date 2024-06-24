const accountId = 123567
let accountEmail = "aryan@gmail.com"
var accountPassword = "12345"
accountCity = "kanpur"
let accountState;

// its value is undefined in o/p because we didnt assigned any value to it

// accountId = 2 // not allowed

accountEmail = "hc@hc.com"
accountPassword = "1343435235"
accountCity = "Lucknow"

console.log(accountId);

/*
please not use Var
beacuse of issue in block scope and functional scope
*/

console.table([ accountId, accountEmail, accountPassword, accountCity, accountState]
    );