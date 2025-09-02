// singleton
// Object.create //under this singleton is made it is constructir method

// object literals

const mySym = Symbol("key1") //symbol declaration 


const JsUser = {
    name: "Hitesh",
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1",
    age: 18,
    location: "Jaipur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]
}

// console.log(JsUser.email) // works 
// console.log(JsUser["email"]) //works and better 
// console.log(JsUser["full name"]) // dot method doesnt work here
// console.log(JsUser[mySym]) //symbol syntax

JsUser.email = "hitesh@chatgpt.com"
// Object.freeze(JsUser) // freeze stops any further updates in object
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

JsUser.greeting = function(){
    console.log("Hello JS user");
}
JsUser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JsUser.greeting());
console.log(JsUser.greetingTwo());