// js is dynamically type
//  Primitive

//  7 types : String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3 // both number 

const isLoggedIn = false // boolean
const outsideTemp = null // null
let userEmail; // undefined

const id = Symbol('123') // datatype is symbol 
const anotherId = Symbol('123')

console.log(id === anotherId); // it will give false 

const bigNumber = 3456543576654356754n //bigInt



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"]; // arrays
let myObj = {
    name: "hitesh",
    age: 22,
} // objects

const myFunction = function(){
    console.log("Hello world");
} //function called obj func when checked type although gives func when checked type of 


console.log(typeof anotherId);
// primitive is always obj 

// https://262.ecma-international.org/5.1/#sec-11.4.3

// +++++++++++++++++++++++
// stack (primitive uses this type of memory)
//heap (non primitive uses this type of memory)

let myYoutubeName = "umarfarooqazmi" // will go in stack
let anothername = myYoutubeName // now anothername is declared and given value of myyoutubename
// you get copy in stack 
anothername = "coffeeandcode" //anothername's value is changed to coffeeandcode 

console.log(myYoutubeName);
console.log(anothername);
//when outputted myyoutube name will give output umarfarooqazmi  and anothername will give output coffeeandcode

let userOne = {
    email: "user@gmail.com" ,
    upi: "user@ybl"
}
// will go into heap and give reference to userOne

let userTwo = userOne // will give reference to the same value in heap

userTwo.email = "ggs@gmail.com"
// this will change value to the new value in both userOne and userTwo
