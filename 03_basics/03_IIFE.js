// Immediately Invoked Function Expressions (IIFE)

(function chai()
{
    console.log('DB CONNECTED');
    
})();  // agar parenthesis laga de toh ab hum syntaxtically shi  hai



(function aurcode()
{ // named IIFE
    console.log('DB CONNECTED TWO');
    
})();  // yaha error isliye aa rahi hai IIFE function invoked toh ho gaya hai but ise pata nhi hai ki actually me context rokna kaha hai aise situstion me javascript me isko end karna padta hai iscase  me hme semi colon lagana padta hai

// Global scope ke pollution se problem hoti hai kai baar jo bhi wha variables aur declaration hai unko hatane ke liye humne IIFE ka use kiya

// ye arrow function bhi chal sakta hai

// ( ()  => {
//   console.log('DB CONNECTED TWO');
  
// })  // OP: DB CONNECTED TWO

( (name)  => {
  console.log(`DB CONNECTED TWO ${name}`);
  
}) ('Krishna')