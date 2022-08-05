let lname="Khan"
console.log(lname[0])
console.log(lname[1])
console.log(lname)
let fname=`Shahbaz`
//template literals
//one use of backtick strings is that you can use " and ' in the string
let ex=`abc'def"`
console.log(ex)
let fullname=`${fname} is first name and ${lname} is last name `
console.log(fullname)
//escape sequence
//let d='ab'c' js will not understand this
//we can do this by \'
let d='ab\'c'
let e='ab\tc'
let f='ab\r'
console.log(d)
console.log(e)
console.log(f)
// \n-newline  \t-tab \r-carriage return
