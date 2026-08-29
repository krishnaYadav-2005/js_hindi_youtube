const coding = ["js", "ruby", "java", "python", "cpp"]
// coding.forEach( function (item){
//     console.log(val);
    
// }   ) // callback function ke andar variable ka naam nhi hota


// coding.forEach(  (item) => {
//  console.log(item);
// } ) 


// function printMe(item){
//   console.log(item);
  
// }
// coding.forEach(printMe)  // refernce dena hai execute nhi karana hai

// coding.forEach((item, index, arr) => {
//     console.log(item, index, arr);
    
// })  // jaruri nhi yaha hamesha yaha item hi aaye iske pass aur bhi parameters hote hai

const myCoding = [
    {
    languageName: "javascript",
    languageFileName: "js"
    },
    {
    languageName: "java",
    languageFileName: "java"
    },
    {
    languageName: "Python",
    languageFileName: "Py"
    },
]

myCoding.forEach( (item) => {
    console.log(item.languageName);
    
})