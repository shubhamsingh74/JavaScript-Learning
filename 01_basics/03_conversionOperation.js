"use strict"

let nameMan = "shubham "
let age = 21

console.log(typeof nameMan)
console.log(typeof (nameMan))
console.log(typeof (age))

let changeNameDataType = Number(nameMan)
let changeAgeDataType = String(age)


console.log(typeof changeNameDataType)
console.log(changeNameDataType)
console.log(typeof changeAgeDataType)
console.log(changeAgeDataType)
//"33" => 33
//"33abc" => NaN
// true => 1; false => 0



let isLoggedIn = 1
let booleanIsLoggedIn = Boolean(isLoggedIn)
console.log(booleanIsLoggedIn)

// 1 => true ; 0 => false
// "" => false
// "shubham" => true







//*************************** Operations *********************************/

let value = 7
let negValue =-value
console.log(negValue)

// console.log(2+2)
// console.log(2-2)
// console.log(2*2)
// console.log(2**3)
// console.log(2/2)
// console.log(5%4)


let str1 ="hello shubham"
let str2 = " Singh"

let str3 = str1+str2
console.log(str3)
console.log("shubham");
console.log("shubham\nsingh");

console.info(str3.replace(nameMan))