const user = {
    username: "Krishna",
    price: 999,

    welcomeMessage: function() { // humne kaha ki jo welcomeMessage hai ye ek function hona chahiye
        console.log(`${this.username} , welcome to website`); // jb hum current context ko refer karte hai toh uske saath this keyword ka use karte hai
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "Swayam" // // ye isliye change hua kyuki humne hardcode nhi likha jo cureent context hai uski value de raha hai
// user.welcomeMessage()
//console.log(this); // kuki hum node envionment me hai isliye this keyword empty object ko refer kar raha hai

// function chai()
// {
//     let username = "Krishna"
//     console.log(this.username); // jb kisi function ke andar aap this ko print karte hai node environment ke andar fir kuch global value bhi aati hai aur bahut saari value aati hai
//     // ye context object ke andar hi kaam kar raha hai function ka andar nhi
// } 
// chai()

// const chai = function () {
//     let username = "Krishna"
//     console.log(this.username);
    
// }
// chai()

// const chai =  () => {
//     let username = "Krishna"
//     console.log(this.username); // undefined
    
// }
// chai()

// basic arrow functon
// const addTwo = (num1, num2) => { // explicit
//     return num1 + num2
// }

// console.log(addTwo(3,4));


// const addTwo = (num1, num2) =>  num1 + num2  // implicit return means main maan leta hoon ki mujhe return likhne ki zarurat nhi hai curly braces me wrap kiya toh return likhna padega aur bracekets me nhi


// const addTwo = (num1, num2) =>  (num1 + num2)  // num1 + num2 me brackets lagane me fayda kya hai  abhi toh no. return kar rahe the agar object return karna hoga tb
 const addTwo = (num1, num2) =>  ({nusername: "Krishna"})  // kyuki objet ko aise return hi nhi kar sakte kyuki culry braces ko parenthesis ko brackets se wrap karna padega
console.log(addTwo(3,4));

// const myArray = [2,5,3,7,8]

// myArray.forEach() 