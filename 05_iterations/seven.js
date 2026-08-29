const myNumers = [1,2,3,4,5,6,7,8,9,10]

// const newNums = myNumers.map( (num) => {return num + 10}) // iski sabse acchi baat hai ki ye automatically value return karta hai
// console.log(newNums);

const newNums = myNumers
                .map((num) => num * 10)
                .map((num) => num + 1) // isi ko bolte hai chaining ki 2 3 method ek saath use kar sakte hai
                . filter((num) => num>= 40) // filter means jo true hoga whi pass hoga
console.log(newNums);
