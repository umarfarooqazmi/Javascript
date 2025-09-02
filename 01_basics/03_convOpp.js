let score = 33

console.log(typeof (score))
let valueNumber = Number(score)
console.log(typeof(valueNumber));
// 33 = number
// 33abc = NaN is called type of valueNumber and number if checked for score itself
//true = 1 false 0 
let isLoggedin = 1
let booleanisLoggedin = Boolean(isLoggedin)
console.log(typeof booleanisLoggedin)
console.log(booleanisLoggedin);
//"" gives false
// "Hitesh" gives true

let someNumber = 33

let stringNumber = String(someNumber)
//this will convert the number to string
console.log(typeof stringNumber);

// **********Operations****************

let value = 3
let negValue = -value
 // console.log(negValue) will give -3
 // console.log(2+2)
 //  console.log(2-2);
 //  console.log(2*2);
 //  console.log(2**2);
 //  console.log(2/2)
 //  console.log(2%2);
 
let str1 = "hello"
let str2 = "world"

let str3 = str1 + str2
console.log(str3) //this will give hello world as output

console.log("1"+ 2) // this will output 12
console.log(1+"2"); // this will output 12
console.log("1"+2+2); // this will output 122
console.log(1+2+"2");// this will output 32

 
console.log(+true); // wil give output 1
console.log(+"");// will give output 0

let num1, num2, num3

num1 = num2 = num3 = 2 + 2

let gameCounter = 100
gameCounter++
console.log(gameCounter)
// this will out put 101 lile ++gameCounter but prefix and postfix operator use is differrent 
//mdn docs to study it in detail


// //gpt notes
// "use strict"; 
// // strict mode makes JS follow newer, safer rules (no sloppy mistakes)


// // ================================
// // TYPE CONVERSIONS
// // ================================

// // --------------------
// // String → Number
// // --------------------

// let score1 = "33";      
// console.log(Number(score1)); // 33 → valid number
// console.log(typeof Number(score1)); // "number"

// let score2 = "33abc";   
// console.log(Number(score2)); // NaN (Not a Number)
// console.log(typeof Number(score2)); // "number" (NaN is still a number type!)

// let score3 = true;      
// console.log(Number(score3)); // 1 → true becomes 1
// console.log(Number(false));  // 0 → false becomes 0

// console.log(Number(null));      // 0 → null becomes 0
// console.log(Number(undefined)); // NaN → undefined cannot become a number


// // --------------------
// // Value → Boolean
// // --------------------
// // Rule of thumb: "empty things" → false, everything else → true

// console.log(Boolean(1));       // true
// console.log(Boolean(0));       // false

// console.log(Boolean(""));      // false (empty string)
// console.log(Boolean("hitesh")); // true (non-empty string)

// console.log(Boolean(null));     // false
// console.log(Boolean(undefined));// false
// console.log(Boolean(NaN));      // false


// // --------------------
// // Number → String
// // --------------------
// let someNumber = 33;
// let stringNumber = String(someNumber);
// console.log(stringNumber);          // "33"
// console.log(typeof stringNumber);   // "string"


// // ================================
// // OPERATIONS (Math & Strings)
// // ================================

// // Basic arithmetic
// let value = 3;
// let negValue = -value;
// console.log(negValue); // -3 (negation)

// console.log(2 + 2);  // 4 (addition)
// console.log(2 - 2);  // 0 (subtraction)
// console.log(2 * 2);  // 4 (multiplication)
// console.log(2 ** 3); // 8 (power: 2^3)
// console.log(2 / 3);  // 0.666... (division)
// console.log(2 % 3);  // 2 (remainder)


// // --------------------
// // String Concatenation
// // --------------------
// let str1 = "hello";
// let str2 = " hitesh";
// let str3 = str1 + str2;
// console.log(str3); // "hello hitesh"


// // ⚡ Type coercion (JS automatically converts types in weird ways)
// console.log("1" + 2);     // "12" → string wins (number turned into string)
// console.log(1 + "2");     // "12" → string wins
// console.log("1" + 2 + 2); // "122" → first is string, so all become string
// console.log(1 + 2 + "2"); // "32" → first numbers add (1+2=3), then string


// // --------------------
// // Operator Precedence
// // --------------------
// // () → highest priority
// console.log((3 + 4) * 5 % 3); 
// // (3+4)=7 → 7*5=35 → 35%3=2


// // --------------------
// // Unary Plus (+)
// // --------------------
// // + tries to convert the value to a number
// console.log(+true); // 1 (true → 1)
// console.log(+false); // 0 (false → 0)
// console.log(+"");   // 0 (empty string → 0)
// console.log(+"123"); // 123 (string → number)


// // --------------------
// // Assignment Chaining
// // --------------------
// let num1, num2, num3;
// num1 = num2 = num3 = 2 + 2; 
// // all three get 4
// console.log(num1, num2, num3); // 4 4 4


// // --------------------
// // Increment & Decrement
// // --------------------
// let gameCounter = 100;

// // Pre-increment (++x) → increases value first, then returns it
// console.log(++gameCounter); // 101

// // Post-increment (x++) → returns value first, then increases
// console.log(gameCounter++); // 101 (shows old value)
// console.log(gameCounter);   // 102 (after increment)

// // Same applies for -- (decrement)
// let points = 50;
// console.log(--points); // 49 (pre-decrement → decrease then return)
// console.log(points--); // 49 (post-decrement → return then decrease)
// console.log(points);   // 48


// // ================================
// // SUMMARY NOTES
// // ================================

// // 🔹 Conversions
// // Number("33") → 33
// // Number("33abc") → NaN
// // Number(true) → 1
// // Number(false) → 0
// // Number(null) → 0
// // Number(undefined) → NaN

// // Boolean(1) → true
// // Boolean(0) → false
// // Boolean("") → false
// // Boolean("text") → true

// // String(33) → "33"

// // 🔹 Operators
// // +, -, *, /, **, % → normal math
// // "string" + number → string wins
// // Pre-increment (++x) → add first, then return
// // Post-increment (x++) → return first, then add
// // Unary plus (+value) → tries to convert value into a number

// // ================================
