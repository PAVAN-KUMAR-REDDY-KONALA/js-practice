"use strict"; //this statement is optional but good to use to treat all the JS code as newer version
// alert(3+3) ->we're using nodejs but not browser,so alert() is not allowed in node
// console.log(3+3) -> this can be used in node

// js documentation : https://tc39.es/ecma262/     but it is difficult to read so go to mdn

//1.string
let name="pavan"  

//2.number->Javascript numbers are always one type:double (64-bit floating point).
let age=21  // note:All JavaScript numbers are stored as decimal numbers (floating point).
let y = 123e5;    // 12300000
let z = 123e-5;   // 0.00123

//3.BigInt
let b = BigInt("123456789012345678901234567890");

//4.boolean
let isLoggedIn=true 

//5.undefined : In JavaScript, a variable without a value, has the value undefined
let state // as it is not initialized,it is undefined
// note: let car = "";-> The value is "", the typeof is "string" but not undefined

//6.null : a standalone value
let state1=null
// console.log(typeof state1) -> o/p : object (but not null)

//7.Symbol -> unique

//8.Object

// typeof operator 
console.log(typeof isLoggedIn)

let x = 16 + 4 + "Volvo"; // x=20Volvo
let a = "Volvo" + 16 + 4; // a=Volvo164
