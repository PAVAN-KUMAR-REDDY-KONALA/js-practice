// stack and heap memory
// stack is used for primitive types: in stack only a copy of value is passed but not address
// heap is used for non-primitive types: in heap address is passed

// in stack:
let a=10
let b=a
b=30     // value of b is updated but a's value is not changed clearly states that only a copy of value is given but not address
console.log(a); //10
console.log(b); //30

// in heap:
let obj1={
    email:"pavan@google.com",
    upiId:123456789
}
let obj2=obj1
obj2.email="pavan@amazon.com" // value of obj2.email is updated then obj1.email's value is changed clearly states that address is passed
console.log(obj1.email); // o/p :pavan@amazon.com
console.log(obj2.email); // o/p :pavan@amazon.com

