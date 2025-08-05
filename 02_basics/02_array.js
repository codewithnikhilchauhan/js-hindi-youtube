const marvel_heros = ["batman","superman", "shaktiman" ]
const dc_heros = ["ironmen", "batman","superman"]


// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]); if we want to find any array we use this like this 

// marvel_heros.concat(dc_heros)
// console.log(marvel_heros);

// we use concat method to add two arrays in same array so here is an another example of this array

// const all_heros = marvel_heros.concat(dc_heros)
// console.log(all_heros);
//  there is another type of concat or spread vsalue

// const all_new_heros = [...marvel_heros, ...dc_heros]
// console.log(all_new_heros);

const another_array = [1,2,3,[2,3],6[7,8,[3,4]]]

const real_another_array = another_array.flat(1)
console.log(real_another_array);

console.log(Array.isArray("Hitesh"));
console.log(Array.from("Hitesh"));
// console.log(Array.from({name: "Hitesh"}));  this will give empty array[]just like this fo rinterview questions

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));




