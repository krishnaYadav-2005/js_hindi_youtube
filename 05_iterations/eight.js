 const myNums = [1,2,3]

// const myTotal = myNums.reduce(function (acc, currval) { // scope use krne ke baad return bhi karna padta hai
//     console.log(`acc: ${acc} and currval: ${currval}`);
    
//     return acc + currval
// }, 0) // yaha 0 isliye likha jisse acc ko ye oata chale ki start kaha se karna hai
const  myTotal =  myNums.reduce( (acc, currval) => acc + currval, 0) // aise bhi arrow function bana sakte hai
console.log(myTotal);

const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
   
]

const priceToPay = shoppingCart.reduce((acc, item) => acc + item.price, 0)
console.log(priceToPay);