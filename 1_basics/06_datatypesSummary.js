// primitive datatypes-7 types: String,Number,Boolean,Null,undefined,Symbol,BigInt
// Reference(Non-Primitive) types:Array,Objects,Functions

// note: JavaScript is a dynamically typed language 
// eg:let x = 10; // x is now a number
// x = "Hello"; // x is now a string
// x = true; // x is now a boolean

// symbols are used to represent unique values that can be used as identifiers or keys in objects
const a=Symbol('123')
const b=Symbol('123')
console.log(a===b); //false

const heros=["ram","hanuman","shiva"] // arrays
console.log(heros);// o/p : [ 'ram', 'hanuman', 'shiva' ]

// object
let myObject={
    name: "pavan",
    age:20
}
console.log(myObject); // o/p is { name: 'pavan', age: 20 }

// function
const myFunction=function(){
    console.log("hello world");
    return 10
}
console.log(myFunction());// o/p is hello world  (function inner execution)   
//                                  10           (return type)
console.log(myFunction);// o/p is [Function: myFunction] 
console.log(typeof myFunction)// o/p is function 


// summary of typeof operator
// 1) Primitive Datatypes : typeof operator
//        number => number
//        string  => string
//        boolean  => boolean
//        null  => object**********************(important)
//        undefined  =>  undefined
//        symbol  =>  symbol
//        bigint  =>  bigint

// 2) Non-primitive Datatypes : typeof operator
//        Arrays  =>  object
//        Function  =>  function  (but function is also an object)
//        Object  =>  object