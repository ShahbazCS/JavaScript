// //Problem 1
let age=prompt("what is your age")
age=Number.parseInt(age)
if(age>10 && age<20){
  console.log("age lies between 10 and 20")
}
else{
  console.log("age is not between 10 and 20")
}


// //Problem 2
let age1=prompt("Enter age")
age1 =Number.parseInt(age1)
switch(age1){
  case 12:
    console.log("your age is 12")
    break;
  case 18:
     console.log("Ahaam! Turned adult") //if age is 18, then this case along with dafault case will run because there's no break
  default:
    console.log("Your age is not special")
}

//Problem3
let num=prompt('what is your number')
num=Number.parseInt(num)
console.log("Your number is",(num%2==0&&num%3==0)?"divisible by 2 and 3":"not divisible by 2 and 3")

//Problem 4
//just change && to ||

//Problem 5
let a=prompt("enter age")
a=Number.parseInt(a)
let b=a>18?"You can drive":"You can't drive"
console.log(b)
