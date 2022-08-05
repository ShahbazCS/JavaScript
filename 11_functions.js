function onePlusAvg(x,y){
  return 1+(x+y)/2
}
const sum=(p,q)=>{
  return p+q
}
const hello=()=>{
  console.log("Hello")
}
let a=1
let b=2
let c=3
console.log("One plus average of a and b is ",onePlusAvg(a,b))
console.log("One plus average of b and c is ",onePlusAvg(b,c))
console.log("One plus average of a and c is ",onePlusAvg(a,c))
console.log("sum is ", sum(9,7))
hello()
//Math.round(a) is used to round decimals into int
