// old and not recommended way of writing strings
let names="pavan"
let age=50
console.log("hello my name is "+names+" and my age is "+age);

// new and recommended way of writing strings(using back ticks``)
let name1="pavan"
let age1=50
console.log(`hello my name is ${name1} and my age is ${age1}`)

let bookName="codingIsFun"
let movieName=new String("Avatar")
console.log(typeof bookName); // string
console.log(typeof movieName); // object
console.log(bookName[0]); //c
console.log(movieName[0]); //A
console.log(bookName.__proto__); //{} -> it looks like this in the output but it is not empty.we can see them in the browesr's console window
console.log(movieName.length) // 6 ->gives length of the string
console.log(movieName.toLowerCase()) // avatar -> but this won't change original string, as it is a stack memory so only a copy of value is passed but not address
console.log(movieName.indexOf('A')) // 0


let a="pavan-kumar-reddy"
console.log(a.substring(0,5)); // pavan  (5 is excluded)


const str = 'The quick brown fox jumps over the lazy dog.';
console.log(str.slice(31));
// Expected output: "the lazy dog."  -> starts from 31 to last
console.log(str.slice(4, 19));
// Expected output: "quick brown fox"  -> starts from 4 to 18
console.log(str.slice(-4));        
// Expected output: "dog."   -> This example counts backwards from the end of the string by 4(backward index starting from 1 but not 0) to find the start index 
console.log(str.slice(-9, -5));
// Expected output: "lazy"    -> This example counts backwards from the end of the string by 9(backward index starting from 1 but not 0) to find the start index   and then counts backwards from the end of the string by 5(backward index starting from 1 but not 0) to find the last index(it is excluded)
console.log(str.slice(-9,41))
// Expected output: "lazy d"    -> This example counts backwards from the end of the string by 9(backward index starting from 1 but not 0) to find the start index   and then counts forward from the start of the string by 41 to find the last index(it is excluded)


const personName="    pavan reddy     "
console.log(personName.trim()); // removes whitespace from both ends of this string
console.log(personName.trimStart()); //  removes whitespace from the beginning of this string
console.log(personName.trimEnd()); // removes whitespace from the end of this string



const url="https://pavan.com/pavan%20reddy" // note: the %20 in the url represents space (if space is present in url then browser converts it into the %20 or +)
console.log(url.replace('%20','-')); // https://pavan.com/pavan-reddy

console.log(url.includes("pavan")) // true

let s="pavan-kumar-reddy"
let namings=s.split('-')
console.log(namings); // [ 'pavan', 'kumar', 'reddy' ]
console.log(typeof namings); // object
