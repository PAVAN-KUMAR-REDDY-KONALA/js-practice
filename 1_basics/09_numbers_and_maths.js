// const score=400
// console.log(score); // 400
// console.log(typeof score) // number

// const num=new Number(200)
// console.log(num); // [Number: 200]
// console.log(typeof num) // object

// console.log(num.toString()); // 200
// console.log(typeof num.toString()); // string  -> all the methods of string is applicable,so we can convert it to string and use them. example:
// console.log(num.toString().length); // 3

// let a=new Number(300)
// let b=new Number(300.124)
// let c=new Number(300.125)
// let d=new Number(300.456667788)
// console.log(a.toFixed(2));// 300.00 -> while making the ecommerce applications we should use this toFixed(x) method to roundoff the big decimal numbers
// console.log(b.toFixed(2));// 300.12
// console.log(c.toFixed(2));// 300.13
// console.log(d.toFixed(2));// 300.46


// let otherNumber1=23.8966
// console.log(otherNumber1.toPrecision(3)); // 23.9
// let otherNumber2=123.8966
// console.log(otherNumber2.toPrecision(3)); // 124
// let otherNumber3=123.4
// console.log(otherNumber3.toPrecision(3)); // 123
// let otherNumber4=1123.8966
// console.log(otherNumber4.toPrecision(3)); // 1.12e+3 -> here our value got lost.so use toPrecision(x) carefully.use only when we know how many digits are present exactly before the point

// const hundreds=1000000
// console.log(hundreds.toLocaleString()); // 1,000,000 -> US standard
// console.log(hundreds.toLocaleString("en-IN")); // 10,00,000 -> INDIA standard


console.log(Number.MAX_VALUE);
console.log(Number.MIN_VALUE);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);



