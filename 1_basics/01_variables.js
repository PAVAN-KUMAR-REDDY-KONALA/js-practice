const accountId=12345
let accountEmail="pavan@giet.ac.in"
var accountPassword="pavangiet"
accountCity="kakinada" //it is also possible but not recommended to use
// accountId=234  -> updation of const variable is not allowed
// note: don't use var keyword as it leads to scope related issues like block scope and functional scope
accountEmail="hc@hc.in"
accountPassword="2121"
accountCity="mumbai"
console.table([accountId,accountEmail,accountPassword,accountCity]); //table() method is used to print many variables at a go


// const accountState; ->it gives error as it is not initialized even though const
let accountState; // o.p is undefined
console.log(accountState);