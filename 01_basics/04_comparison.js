// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


// console.log("2" > 1); // becareful with datatypes declaration and comparison both should be same 
// console.log("02" > 1);
  
console.log(null > 0);//false
console.log(null == 0);//false
console.log(null >= 0); // true because <> converts the null to 0 and thenn compares
// the reason is that an equality check == and comparison > <, >=, =< works differently.
//comparisons convert the null to number, treating it as zero 
console.log(undefined == 0);
console.log(undefined > 0);
console.log(undefined < 0);// all will give false because >< converts undefined to 1 and then compares

// === 

console.log("2" === 2); // === does strict check ans checks data types