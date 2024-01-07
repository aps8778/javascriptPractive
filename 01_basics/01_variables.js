const accountId = 123456
let email = "aps8778@gmail.com"
var accountPassword = "abhishek96"
accountCity = "Narmadapuram"
let accountState ;

//accountId = 2 // not allowed
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope & functional scope
*/
email = "aps@pps.com"
accountPassword = "123"
accountCity = "Satna"
console.table([accountId,email,accountPassword,accountCity, accountState])