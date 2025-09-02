// array

const myArr = [0, 1, 2, 3, 4, 5]
const myHeors = ["shaktiman", "naagraj"]

const myArr2 = new Array(1, 2, 3, 4)
// console.log(myArr[1]);

// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9) // adds nine in the beginning of the array 
// myArr.shift() // removes 9 from the array no need to add vaslue in the parenthesis

// console.log(myArr.includes(9)); // questions to ask if your array has 9 in it 
// console.log(myArr.indexOf(3)); // check the index of number 3  it will give -1 as false and cannot find answer

// const newArr = myArr.join() // joins the array and converts it to string

// console.log(myArr);
// console.log( newArr);


// slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1, 3) // returns sectin of array // doesnt print 3

console.log(myn1);
console.log("B ", myArr);


const myn2 = myArr.splice(1, 3) // manipulates original array
console.log("C ", myArr); // outputs remaianing stuff from array 
console.log(myn2); // outputs spliced parts including 3 