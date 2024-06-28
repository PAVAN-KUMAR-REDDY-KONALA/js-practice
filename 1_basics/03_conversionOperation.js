// 1.______ to number conversion
let score="22" 
console.log(typeof score) // o/p: string
// string to number conversion
let valueInNumber=Number(score)
console.log(valueInNumber) //o/p is 22
console.log(typeof valueInNumber) // o/p: number

// in above case if score has some letters in the string
let score2="22a" 
console.log(typeof score2) // o/p: string
// string to number conversion
let valueInNumber2=Number(score2)
console.log(valueInNumber2) //o/p is NaN
console.log(typeof valueInNumber2) // o/p: number

// in above case if score has null
let score3=null 
console.log(typeof score3) // o/p: object
// null to number conversion
let valueInNumber3=Number(score3)
console.log(valueInNumber3) //o/p is 0
console.log(typeof valueInNumber3) // o/p: number

// in above case if score has undefined
let score4=undefined 
console.log(typeof score4) // o/p: undefined
// undefined to number conversion
let valueInNumber4=Number(score4)
console.log(valueInNumber4) //o/p is NaN
console.log(typeof valueInNumber4) // o/p: number

// boolean to number
let value1=true
let value2=Number(value1)
console.log(value2); // 1
console.log(typeof value2);  // number

let value3=false
let value4=Number(value3)
console.log(value4); // 0
console.log(typeof value4);  // number


// summary of above points : ______ to number conversion
// "22" -> 22
// "22a" -> NaN
// true -> 1
// false -> 0
// undefined -> NaN
// null -> 0

//2.______ to boolean conversion
let isLogIn=1
let booleanIsLogIn=Boolean(isLogIn)
console.log(booleanIsLogIn); // true
console.log(typeof booleanIsLogIn); // boolean

let isLogIn1=0
let booleanIsLogIn1=Boolean(isLogIn1)
console.log(booleanIsLogIn1); // false
console.log(typeof booleanIsLogIn1); // boolean

let isLogIn2=""
let booleanIsLogIn2=Boolean(isLogIn2)
console.log(booleanIsLogIn2); // false
console.log(typeof booleanIsLogIn2); // boolean

let isLogIn3="pavan"
let booleanIsLogIn3=Boolean(isLogIn3)
console.log(booleanIsLogIn3); // true
console.log(typeof booleanIsLogIn3); // boolean

let isLogIn4=102
let booleanIsLogIn4=Boolean(isLogIn4)
console.log(booleanIsLogIn4); // true
console.log(typeof booleanIsLogIn4); // boolean

let isLogIn5=undefined
let booleanIsLogIn5=Boolean(isLogIn5)
console.log(booleanIsLogIn5); // false
console.log(typeof booleanIsLogIn5); // boolean

let isLogIn6=null
let booleanIsLogIn6=Boolean(isLogIn6)
console.log(booleanIsLogIn6); // false
console.log(typeof booleanIsLogIn6); // boolean

// summary of above points : ______ to boolean conversion
// 1 -> true
// 0 -> false
// "pavan" -> true
// "" -> false
// 102 -> true
// undefined -> false
// null -> false

//3.______ to string conversion
let someNumber=33
let stringNumber=String(someNumber)
console.log(stringNumber); // 33
console.log(typeof stringNumber); // string