let num = [1, 2, 3, 34, 4]
//toString
let b=num.toString()
console.log(b)  //b is a string
//Join
let c =num.join("_");
console.log(c)
// cis a string here
// let r=num.pop() //pop return the popped element from last
// console.log(num)
// console.log(r)
// //pop modifies original array
// let s=num.push(56) //push returns the new array length
// console.log(num,s)
//push adds at last

//shift removes the first element
let r=num.shift() //return the elemt removed
console.log(r,num)
//unshif adds the first element and returns length of array
let t=num.unshift(100)
console.log(t,num)
