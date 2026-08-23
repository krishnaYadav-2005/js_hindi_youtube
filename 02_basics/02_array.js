const marvel_heroes = ["thor", "Ironman", "spiderman"]
const dc_heroes = ["superman", "flash", "batman"]

//marvel_heroes.push(dc_heroes) // it retiurns a existing array
// console.log(marvel_heroes);
// console.log(marvel_heroes[3][1]);

// const allHeroes = marvel_heroes.concat(dc_heroes) // it returns a new array
// console.log(marvel_heroes);

const all_new_heroes = [...marvel_heroes, ...dc_heroes] // dot lagane se ab ye array nhi rahe ab iske ek ek element individual ho gye

console.log(all_new_heroes);

const another_array = [1,2,3,[4,5,6],7,[6,7, [4,5]]]

const real_another_array = another_array.flat(Infinity)// Returns a new array with all sub-array elements
console.log(real_another_array);

console.log(Array.isArray("Krishna"));
console.log(Array.from("Krishna")); // ye string, number koi bhi value ko array baana dega
console.log(Array.from({name: "hitesh"})); // interesting means null array milega kyuki waha key aur value dono pd jati hai


let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));  // Returns a new array from a set of elements


