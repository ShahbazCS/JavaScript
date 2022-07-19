console.log("var let const demo")
var a=45;
console.log(a);
let b="Shahbaz";
const author="Shahbaz Khan" //const must be initialized while declaring
//let author=5  It will throw an error,bcoz const can't be redeclared
//author=5 throws an error bcoz const can't be changed
console.log(b)
let c=null;
let d=undefined
{
  let b='this'
  console.log(b)
}
b=6; 
console.log(b)
a="badal gya"
console.log(a)
//var declares a variable with global scope
//let declares a variable with block scope
// var and let can be updated at anytime. for var line 2 and 14 and for let line 4 and 12
//var can be redeclared  but let can't be
//for ex let b=5 and then let b="acha" will throw error
//while var b=5 and then var b="acha" will update var b to "acha"
//const can't be updated or redclared
//multiple cursors can be used by alt+click
