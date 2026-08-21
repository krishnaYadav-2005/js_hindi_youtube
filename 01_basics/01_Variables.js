const accountId = 144553
let accountEmail = "krishna.2430936@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur"

// accountId = 2 not allowed
accountEmail = "hc@hc.com"
accountPassword = "982672"
accountCity = "Kanpur"
// ek variable bhi bina deta type ke declare ho sakta hai lekin ye sahi nahi hai
// js me semi colon optional hai
let accountState;
console.log(accountId);

/*
Prefer not to use var
because of issue in block scope and functional scope
*/
console.table([accountEmail,accountPassword,accountCity,accountState])
 
