// for of

// ["", ", ""]
// [{}, {}, {}]

const arr = [1,2,3,4,5]

for (const num of arr) { // yaha syntax me object ka matlab ye hai kis chiz ke uppar loop lagana hai
   // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
    console.log(`Each char is ${greet}`);
    
    
}

// maps

const map = new Map()  // it is a object holds key value pair
map.set('IN', "India")
map.set('USA', "United States of America")
map.set('Fr', "France")
map.set('IN', "India")

//console.log(map);

for (const [key, value]of map) { // humko alag alag value chahiye hoti hai isme key aur vaalue me se koi ek bhi access kar sakte hai 
    //console.log(key, ':-', value);
    
}

const myObject = {
    game1: 'NFS',
    game2: 'Spiderman'
}

// for (const [key, value] of myObject) { // maps iteratable hai baaki objects ko iterate karne ke liye doosre tarike hota hai
//     console.log(key, ':-', value);
    
// }

