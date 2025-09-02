const name = "hitesh"
const repoCount = 50

// console.log(name + repoCount + " Value"); // not recommended syntax 

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); //better and readable syntax 

const gameName = new String('hitesh-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));// this will execute the position 2
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4) // last value is not included
console.log(newString);

const anotherString = gameName.slice(-8, 4) //reverse and substring doesnt take negative values 
console.log(anotherString);

const newStringOne = "   hitesh    "
console.log(newStringOne);
console.log(newStringOne.trim()); //removes spaces 

const url = "https://hitesh.com/hitesh%20choudhary"

console.log(url.replace('%20', '-'))//helps replsace %20

console.log(url.includes('sundar')) // to check if sundar is present in url

console.log(gameName.split('-')); //splits and gives ans based on - or whatever you define 