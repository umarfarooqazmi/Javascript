// const userEmail = 'um@gm.com'

// if(userEmail){
//   console.log("got user email");
  
// }else{
//   console.log("didnt get the email");
  
// }
// this will give got user email as output because userEmail has a value and if it was "" empty string it would give didnt get the email as output 

// falsy vals
// false, empty string, 0,-0, bigint 0n, null, undefined,NaN
//truthy
// "0","false",[],{}, " ", function(){}

// const userEmail = []

// if(userEmail.length===0){
//   console.log("Empty array");
  
// }
const userEmail = {}

if(Object.keys(userEmail).lenght==0){
  console.log("Empty Obj");
  
}

//Nullish coalescing operator (??): null undefined

let val1
// val1= 5 ?? 10 // will output 5
// val1 = null ?? 10 //will output 10
// val1 = undefine ?? 10 ?? 20 // will output 10


// Terniary Operator

// condition ? true : false

const iceTeaPrice = 100

iceTeaPrice>80 ? console.log("True") : console.log("false");