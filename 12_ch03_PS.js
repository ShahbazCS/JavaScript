//qn1
const a={
  Fan:20,
  Bulb:10,
  Tube:"High power"
}
for(let i=0;i<Object.keys(a).length;i++){
  console.log(Object.keys(a)[i] +" is "+a[Object.keys(a)[i]])
}//Object.keys() creates an array containg all keys present in the object

//qn2
for(let i in a){
  console.log(i+" : "+a[i])
}


