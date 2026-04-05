// different variable types in javascipt
let a=1;
const b=2;
var c="ritik" // var is globally scoped so it is not preffered to use beacuse of issue in functional scope and global scope
console.log(a);
console.table([a,b,c])
let tempword; // this is allowed we can initailize let variable but cant initalize const variable
// const tempword2;
console.table([a,b,c,tempword])
//alert("hello")// we are using node js not browser hence it gives error

