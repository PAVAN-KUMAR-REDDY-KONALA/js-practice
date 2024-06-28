// === operator in js:Returns true if the operands are equal and of the same type
// == operator in js : 	Returns true if the operands are equal.
console.log("2"==2) // true
console.log("2"===2) // false


// note: when we compare 2 values of same type then there is no problem eg:2>=3 but when we compare 2 values of different type then we maynot get our predicted result so when we compare 2 values in js make sure that those 2 are of same type

// below given 2 statements are bad practices->even though js is giving true
console.log("2">1); // true
console.log("02"<3); // true

// bad practices-> reason: in js == operator and comparison operators like >,>=,<,<= work differently. so comparisons convert null to zero
console.log(null>0); //false
console.log(null==0); //false
console.log(null>=0); //true

// bad practices
console.log(undefined>0); //false
console.log(undefined==0); //false
console.log(undefined<=0); //false