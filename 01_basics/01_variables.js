const accountId = 144552
let accountEmail = "prathamesh@gmail.com"
var accountPassword = "1234"
accountCity = "jaipur"
let accountState;


// accountId = 2 not allowed...



accountEmail = "hc@hc.com"
accountPassword ="265341"
accountCity = "bengaluru"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountId,accountEmail, accountPassword, accountCity, accountState])
