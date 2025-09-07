// for of loop

const arr = [1, 2, 3, 4, 5]

for (const num of arr) {
  console.log(num);
}

const greetings = "hello world"
for (const greet of greetings) {
  console.log(`Each char is ${greet}`);
  
     
}

// Maps
const map = new Map ()
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
// map.set('IN', "India") // wont print because maps are known for unique values and IN is already declared above
console.log(map);

for (const [key, value ] of map) {
  console.log(key, ":-", value);
  
} // obj wont print like this there is  seperate way to do it
