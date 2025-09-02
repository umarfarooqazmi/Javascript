"use strict" //using this treats all js code as newer version

//alert(3+3) // will work in browser but not in nodejs

console.log(3
+
3) // does not make the code look good but it will work

// number is a data type limit is 2 to the power of 53
// string is a data type like "hello"
//null is a standalone value but when checked its type it will show object
// boolean is true/false
//undefined is a data type which means data is not defined yet its different from null because null means empty
//object will study more about this in future
//symbol is unique datatype 
console.log(typeof null)// this is how we check type of data 

/* check out mdn and tc39 docs */



//gpt notes
"use strict"; 
// 🔒 strict mode → makes JS follow newer, safer rules


// =========================
// PRIMITIVE DATA TYPES
// =========================

// 1. Number → can be integer or decimal
let age = 18;
let pi = 3.14;
console.log(typeof age); // "number"
console.log(typeof pi);  // "number"

// 2. BigInt → for very large numbers beyond safe range
let bigNumber = 1234567890123456789012345678901234567890n;
console.log(typeof bigNumber); // "bigint"

// 3. String → text inside quotes (single '', double "", or backticks ``)
let name = "Hitesh";
let greeting = `Hello, ${name}`; // template literal
console.log(typeof name);     // "string"
console.log(typeof greeting); // "string"

// 4. Boolean → only true or false
let isLoggedIn = false;
let isPaid = true;
console.log(typeof isLoggedIn); // "boolean"

// 5. Null → intentional empty value
let emptyValue = null;
console.log(typeof emptyValue); 
// ❌ "object" → a historical bug in JS (remember: null is NOT an object)

// 6. Undefined → variable declared but no value given
let state;
console.log(typeof state); // "undefined"

// 7. Symbol → always unique (used for uniqueness in objects)
let id1 = Symbol("123");
let id2 = Symbol("123");
console.log(id1 === id2); // false → each symbol is unique
console.log(typeof id1);  // "symbol"


// =========================
// NON-PRIMITIVE DATA TYPE
// =========================

// Object → collection of key:value pairs
let user = {
  username: "hitesh",
  age: 18,
  isLoggedIn: false
};
console.log(typeof user); // "object"

// Array (also an object type)
let fruits = ["apple", "banana", "mango"];
console.log(typeof fruits); // "object"

// Function (special type of object)
function sayHello() {
  console.log("Hello!");
}
console.log(typeof sayHello); // "function" (actually object under the hood)


// =========================
// SUMMARY
// =========================
// Primitive types: Number, BigInt, String, Boolean, Null, Undefined, Symbol
// Non-primitive: Object (includes arrays, functions, objects)
// typeof null → "object" (weird bug in JS, but keep in mind)
// =========================
