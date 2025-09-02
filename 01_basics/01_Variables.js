const accountId = 1121 // this value cannot be changes because it is a constant if you change it and print it error will show
let accountEmail = "1121@gmail.com" // let is used to define variables and is recommended to use it
var accountPassword = "231313" // var is an older version of how variable use to be declared but caused scope problem so now it is not used altho still works and is used in old codes
accountCity = "Jaipur" // withhout let and var variable can be declared but is not recommended
let accountState; // will display undefined
console.log(accountId) //This will print account ID 

console.table([accountEmail, accountPassword, accountCity, accountState ])
/*
this will print all of the variables called in tabular form
*/




//GPT  notes
// =========================
// VARIABLES IN JAVASCRIPT
// =========================

// const → constant value (cannot be changed later)
// const accountId = 144553  

// // let → can be changed (modern way)
// let accountEmail = "hitesh@google.com"  

// // var → avoid using (old way, has scope issues)
// var accountPassword = "12345"  

// // no keyword → BAD practice (becomes global automatically)
// accountCity = "Jaipur"  

// // variable declared but no value → undefined
// let accountState;


// // =========================
// // CHANGING VALUES
// // =========================

// // accountId = 2  // ❌ ERROR → const cannot be changed

// accountEmail = "hc@hc.com"       // ✅ allowed (let)
// accountPassword = "21212121"     // ✅ allowed (var, but not safe)
// accountCity = "Bengaluru"        // ✅ allowed (but risky, global scope)


// // =========================
// // OUTPUT
// // =========================

// // console.log() → prints single value
// console.log(accountId);

// // console.table() → prints multiple values in table form
// console.table([accountId, accountEmail, accountPassword, accountCity, accountState]);


// // =========================
// // WHY NOT USE var ?
// // =========================

// // SCOPE = playground rules (where variable is allowed to play)

// // Example with let (block scope)
// {
//   let blockScoped = "I live inside this block";
//   console.log(blockScoped); // ✅ works here
// }
// // console.log(blockScoped); // ❌ ERROR (cannot access outside block)


// // Example with var (function scope)
// {
//   var functionScoped = "I escape the block!";
// }
// console.log(functionScoped); // ✅ works (escaped) → this is dangerous!


// // =========================
// // SUMMARY
// // =========================
// // const → permanent marker (fixed value)
// // let   → pencil (can erase & change, safe)
// // var   → crayon (messy, avoid)
// // no keyword → scribble on wall (global, risky)
// // =========================
