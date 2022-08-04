let a = prompt("Hey what is your age?")
//alert("Hey")
a=Number.parseInt(a)
if(a<0){
  alert("Invalid age")
}
else if(a<9){
  alert("Hey kid, go play outside")
}
else if(a>=9 && a<18){
  alert("Hey kid, grow up become 18 firs")
}
else{
  alert("You can drive")
}
console.log("Done")
//ternary operator
console.log("You can",a<18?"not drive":"drive")
