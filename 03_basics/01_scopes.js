//var c= 300 // global scope me hum jo bhi value likhte hai wo block scope me available hoti hai but vice vresa is not avilable
let a = 300
if(true) { // block scope
    let a = 10
    const b = 20
  //  console.log("INNER: ", a);
    function addnum(){

    }

}

//console.log(a);
//  console.log(b);
// console.log(c);

function one(){
    const username = "Krishna"

    function two(){
        const website = "youtube"
        console.log(username);
        
    }
     //console.log(website); // yhi pe error aa gya iska matlab two() kbhi chalega hi nhi
   two() // two ko comment karne ke baad on kbhi execute hi nhi hoga
}

//one()


if(true){
    const username = "hitesh"
    if (username === "hitesh") {
        const website = " youtube"
      //  console.log(username + website);
    
    }
    //console.log(website);
    
}
//console.log(username);




// +++++++++++++++++++++++++++++ interesting +++++++++++++++++++++++++++++

console.log(addone(5))
function addone(num){ // function
    return num + 1 // 6
}



addTwo(5)
const addTwo = function(num) {// yebhi function hai but ise kbhi kadar expression bhi bol diya jata hai
return num+2
}// isme error aayega kyuki isme function ko variable karte hai isi ko hoisting bhi bolte hai