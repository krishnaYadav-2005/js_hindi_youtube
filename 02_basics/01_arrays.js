// array

const myArr = [0,1,2,3,4,5]
const myHeroes = ["shaktiman", "naagraj"] // Array declaration
const myArr2 = new Array(1,2,3,4) // Array Declaration by default square brackets lag jayega
console.log(myArr[1]);  // array is an object in js . Array-operation create shallow copies in js(maans same reference point jo change hoga wo original array me bhi hoga)


// Array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

//myArr.unshift(9) // ye starting me push karta hai
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join() // ye bind bhi kar deta hai ur string me bhi change kar ta hai
// console.log(myArr);
// console.log(newArr);


// slice, splice

console.log("A ", myArr);
const myn1 = myArr.slice(1,3) // Return a copy of section of array
console.log(myn1);
console.log("B ", myArr);

const myn2 = myArr.splice(1,3) // 1,2,3 nikal jayega
console.log("C ", myArr);

console.log(myn2);



