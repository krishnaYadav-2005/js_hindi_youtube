// Primitive

// 7 types : String, Number, Boolean, null, undefined, symbol, BigInt
const score = 100
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail; // by default undefined initialise hota hai 

const id = Symbol('123')
const anotherId = Symbol('123') // symbol ka kaam hi yhi hai ki agar value bhi same pass karenge lekin answer different aayega

console.log(id == anotherId);
const bigNumber = 34567890954321997565n


// Reference (Non primitive)

// Array, onbject, functions

const heroes = ["Shaktiman", "naagraj", "doga"]
   let myObj =  {
        name: "Krishna",// in value ko hum variable me bhi store kar sakte hai
        age: 22,

    }
const myfunction = function() // function ko js me as a variable bhi declare kar sakte hai
{
    console.log("Hello world");
}

console.log(typeof bigNumber);

// +++++++++++++++++++++++++++++++++++++++++++++++++++++++\

// Stack (Primitive), Heap  (Non- Primitive) // stack memory call me variable ki copy milti hai jisco declare kiya ho
// Heap se original value ka reference milta hai

let myYoutubename = "Hiteshchoudharydotcom"

let anothername = myYoutubename
anothername = "chaiaurcode"


console.log(myYoutubename);
console.log(anothername);

let userOne = {
    email: "user@google.com",
    upi: "user@ybl"
}
let userTwo = userOne

userTwo.email = "hitesh@google.com"

console.log(userOne.email);
console.log(userTwo.email);




