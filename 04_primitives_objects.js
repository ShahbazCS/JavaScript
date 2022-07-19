console.log("primitive data types and objects in js")
//nn bb ss u
let a=null;
let b=345;
let c=true;
let d=BigInt("567")
let d1=BigInt("567")+BigInt("3")
let e="Harry"
let f=Symbol("I am a symbol")
let g= undefined 
let g1 
//let g=undefined and let g are same
console.log(a,b,c,d,d1,e,f,g,g1)
console.log(typeof d,typeof e)

//objects in js(Non primitive data type)
const item={
  "Shahbaz":true,
  "Tejas":false,
  "Simran":"Delhi",
  "Meerut":40,
  "Ghaziabad":undefined
}
console.log(item["Tejas"],item["sdf"])
