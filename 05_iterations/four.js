const myObject = {
    js: 'javascript',
    cpp: 'C++',
    rb: "ruby",
    swift: "swift by apple"  // forof loop toh map ke saath use hota hai lekin objects ke saath nhi chal raha hai

}

// for (const key in myObject) {  // ye toh tha key ke liye
// console.log(key);

// }

// jb key aur object dono chahiye ho tb ye use karenge
// for (const key in myObject) {  
// console.log(`${key} shortcut is for ${myObject[key]}`);

// }


// forin loop se hum array ke andar print karke dekhte hai

const programming = ["js", "rb", "py", "java", "cpp"] // arrays ki jo keys hoti hai wo by default no. hoti hai but obj me jo mrji aaye wo keys daal sakte hai

for (const key in programming) {
//    console.log(key);
   
  //  console.log(programming[key]);
    
}


const map = new Map()  // it is a object holds key value pair
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")


for (const key in object) {
    // is tarah se map ke uppar iteration nhi kiya jata hai   
}