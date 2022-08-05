//PS Q1
let name="Khan\"" // escape character \ and the correcter next to escape are considered as 1. So the length is 5
console.log(name.length)

//Q2
const sentence="Tu Gadha hai"
const word="Tu"
console.log(`The word ${word} ${sentence.includes(word)?'is':"is not"} in the sentence`)
//startswith and endswith
//problem 4
let str2="Give me 200"
let amount=Number.parseInt(str2.slice("Give me".length+1))
console.log(amount)
console.log(typeof amount)

//Q5
let dost="Bibek"
dost[0]="V" //It doesn't change the string bcoz string is immutable but it also doesn't give an error
console.log(dost)
