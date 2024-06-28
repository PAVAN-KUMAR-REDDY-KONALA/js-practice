// old and not recommended way of writing strings
let names="pavan"
let age=50
console.log("hello my name is "+names+" and my age is "+age);

// new and recommended way of writing strings(using back ticks``)
let name1="pavan"
let age1=50
console.log(`hello my name is ${name1} and my age is ${age1}`)

let bookName="codingIsFun"
let movieName=new String("avatar")
console.log(typeof bookName); // string
console.log(typeof movieName); // object
console.log(bookName[0]); //c
console.log(movieName[0]); //a
console.log(bookName.__proto__);
