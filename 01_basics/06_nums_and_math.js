const score = 400
console.log(score);
const balance = new Number(100)
console.log(balance);

console.log(balance.toString().length); // ab no. string me convert ho gya hai
console.log(balance.toFixed(1)); // iske use no ke baad yaha jitna pass karenge point ke baad utne zero lg jayega

const otherNumber = 123.8966

console.log(otherNumber.toPrecision(4));

const hundreds = 1000000
console.log(hundreds.toLocaleString('en-IN')); // isse comma lg jayega

// ++++++++++++++++++ Maths  ++++++++++++++++++++++++++++++++
// console.log(Math);
// console.log(Math.abs(-4));
// console.log(Math.round(4.6));
// console.log(Math.ceil(4.2));
// console.log(Math.floor(4.9))
// console.log(Math.min(4, 3, 6, 8));
// console.log(Math.max(4,3,6,8));

console.log(Math.random()); // iski value hamesha 0 aur 1 ke beech me aayegi
console.log((Math.random()*10) + 1); // multiply ka matlab hota hai ki humne value toh left me shift kar diya but lekin ho sakta hai kai baar value aaye 0.1
console.log(Math.floor(Math.random()*10) + 1) // floor jo hai 0 de dega aur one humne isliye ad kara hai ki min 1 hona chahiye

const min = 10;
const max = 20;

console.log(Math.floor(Math.random() * (max - min + 1)) + min );  // yaha max minus min isliye kiya hai jisse wo range aa jaye jis range ke andar hme value chahiye aur plus 1 isliye taaki zero case avoid kar sake ye toh uppar wali value a rahi thi toh min add kar diya ki min itna toh chahiye







