// Dates

let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(typeof myDate);

//let myCreatedDate = new Date(2023, 0, 23) // js me month 0 se start hota hai 0 means jan
// let myCreatedDate = new Date(2023, 0, 23, 5, 3)
// let myCreatedDate = new Date("2023-01-14")
let myCreatedDate = new Date("01-14-2023")
//console.log(myCreatedDate.toLocaleString());

let myTimeStamp = Date.now()


// console.log(myTimeStamp);  // isme 1 jan 1970 se lekar ab tak ki miliseconds ki value aayegi
// console.log(myCreatedDate.getTime()); // Date yaha object isliye yaha .get time likh rahe hai
// console.log(Math.floor(Date.now()/1000)); // for converting miliseconds in seconds

let newDate = new Date()
console.log(newDate);
console.log(newDate.getMonth() + 1);
console.log(newDate.getDay());


newDate.toLocaleString('default', {
    weekday : "long"
})




 




