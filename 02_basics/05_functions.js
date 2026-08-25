// How to declare a function

function sayMyName(){
    console.log("K");
    console.log("R");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("N");
    console.log("A");
}
//sayMyName // reference
//sayMyName() // execution
 
// first method
// function addTwoNumbers(number1, number2){  //definition mein parameters
//     console.log(number1 + number2);
    
// }
// addTwoNumbers(4, 4) // call me arguments
// addTwoNumbers(4, "4")
// addTwoNumbers(4, "a")
// const result = addTwoNumbers(4, null)  // console karne ka matlab ye nhi hai ki wo function wo value return bhi kar raha hai
// console.log("Result: ", result);


   // second method
// function addTwoNumbers(number1, number2){  //definition mein parameters
// // let result = number1 + number2
// // return result
// return result
// }
// const result = addTwoNumbers(3,5)
// // console.log("Result: ", result);

function loginUserMessage(userName = "sam"){ // fir kabhi undefined hogi hi nhi aur agr execution me pass krdi value toh wo overwrite ho jayegi
    if(username === undefined){
        console.log("Please enter a username");
         return
    }
    return `${userName} just logged in` 
}

// console.log(loginUserMessage("Krishna"));
// console.log(loginUserMessage()); // undefined

// function calculateCartPrice(...num1){ //rest isko isliye bol rahe hai abhi jitna bhi item mila hai wo abhi bahut hi khule me mil raha hai isko bundle me pack karo aur hame de do yhhi rest operator ka matlab hai
   function calculateCartPrice(val, val2, ...num1){ // 500, 2000
return num1
}
//console.log(calculateCartPrice(200, 400, 500, 2000));

//how to pass aand use object in a function in 
const user = {
    username: "Krishna",
    price: 199
}

function handleObject(anyobject){ // func def
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);

}

//handleObject(user)

// we can pass direst object

handleObject({
    username: "sam",
    price: 399
})

// for array

const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getArray){
  return getArray[1]
}

//console.log(returnSecondValue(myNewArray));

// we can pass direct array
console.log(returnSecondValue([200, 400, 500, 1000]));
