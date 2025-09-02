const marvel_heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// marvel_heros.push(dc_heros) // array takes array and makes array under an array

// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);

// const allHeros = marvel_heros.concat(dc_heros) // this returns a new array ombining the other two attay real merge
// console.log(allHeros);

const all_new_heros = [...marvel_heros, ...dc_heros] // same as concat but better 

// console.log(all_new_heros);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity) // makes all the sub array to br one single array
console.log(real_another_array);



console.log(Array.isArray("Hitesh")) // checks if it is an array
console.log(Array.from("Hitesh")) // makes it an array
console.log(Array.from({name: "hitesh"})) // interesting

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));