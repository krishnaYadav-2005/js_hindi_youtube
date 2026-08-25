// singleton
// jb bhi literal se banate hai toh singleton nhi banta  aur constructor singleto banta hai
// Object.create ye constructor wala hai

// object literals

const mySym = Symbol("key1")

const JsUser = { // Declaration of abjects
    name: "Krishna" ,// by default name ko string mann leta hai agar chahe toh comma laga sakte hai
    "full name": "Hitesh Choudhary",
    [mySym]: "mykey1", // isko symbol me krne ke liye square bracket me krna padega
    age: 18,
    location: "Kanpur",
    email: "hitesh@google.com",
    isLoggedIn: false,
    lastLoginDays: ["Monday", "Saturday"]

}
// How to access an objects
// console.log(JsUser.email); // jb dot ki tarah dete hai toh use string nhi banana padta hai
// console.log(JsUser["email"]); // name ko behind the seen string ki tarah track ho raha hai isliye email ko string banaya 
// console.log(JsUser["full name"]); // isko dot se access nhi kar sakte 
// console.log(typeof JsUser[mySym]); // yaha bhi btracket lagana padega 

//How to change a value in js

JsUser.email = "hietsh@chatgpt.com"
Object.freeze(JsUser) // error toh nhi aayega but isko likhne se koi change posssible nhi hai
JsUser.email = "hitesh@microsoft.com"
// console.log(JsUser);

// fumnctions add krna
JsUser.greeting = function(){
    console.log("Hello JS user");
    
}
//console.log(JsUser.greeting);
console.log(JsUser.greeting()); 

JsUser.greetingTwo= function(){
    console.log(`Hello JS user, $(this.name)`); // string interpolation same object ko rference karne ke liye this  keyword ka use karte hai
    
}
console.log(JsUser.greeting);



