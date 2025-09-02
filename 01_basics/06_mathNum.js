const score = 400
// console.log(score);

const balance = new Number(100) //to explicitly define score to be num
// console.log(balance);

// console.log(balance.toString().length); // makes the num string 
// console.log(balance.toFixed(1)); //for precision gives 100.0

const otherNumber = 123.8966

// console.log(otherNumber.toPrecision(4)); // precision before decimal

const hundreds = 1000000
// console.log(hundreds.toLocaleString('en-IN')); // will display in indian standard 

// +++++++++++++ Maths +++++++++++++++++++++++++++++

// console.log(Math); // it is an object 
// console.log(Math.abs(-4)); // will gibe absolute values negative to positive and positive will remail positive
// console.log(Math.round(4.6)); // round off bassed on .5
// console.log(Math.ceil(4.2)); will go bigger
// console.log(Math.floor(4.9)); will go lower
// console.log(Math.min(4, 3, 6, 8)); //find min value
// console.log(Math.max(4, 3, 6, 8)); find max value

console.log(Math.random());
console.log((Math.random()*10) + 1);
console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1)) + min)