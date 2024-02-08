// console.log("variables hai bhai")
const accountId =144415
let accountEmail ="shubhamsingh16ay@gmail.com"
var accountPassword ="12345"
accountCity ="jaipur"
let accountState;

console.table([
    accountId,accountEmail,accountPassword,accountCity,accountState
])

//accountId = 2   //not allowed
console.log(accountId)

accountEmail ="shubhambhaigmail.com" // this can be allowed
console.log(accountEmail)


accountPassword="12"      //this can be allowed
 console.log(accountPassword)

accountCity ="dubai"          //this can be allowed
// console.log(accountCity)



console.table([
    accountId,accountEmail,accountPassword,accountCity,accountState
])

/*
prefer not to use var  never
because of the issue in block scope and functional scope
*/
