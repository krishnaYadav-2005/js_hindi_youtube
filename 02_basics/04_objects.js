//const tinderUser = new Object() // singleton object
const tinderUser = {} // non singleton object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false



// console.log(tinderUser);


// How to declare a objects within objects
const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Krishna",
            lastname: "Yadav"
        }
    }
}
//  console.log(regularUser.fullname.userfullname.firstname);
        
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}
const obj4 = {5: "a", 6: "b"}

//const obj3 = {obj1, obj2} iska use nhi karenge kyuki ye object ka bhi object bana deta hai
//const obj3 = Object.assign({}, obj1, obj2, obj4)

const obj3 = {...obj1, ...obj2} // spread kr dete hai
// console.log(obj3);

// jbbhi database se value aaygei

const users = [ // ye hai array ka objects
    {
        id: 1,
        email: "h@gmail.com"
    },
     {
        id: 1,
        email: "h@gmail.com"
    },

]
users[1].email
// console.log(tinderUser);
// console.log(Object.keys(tinderUser)); // jbbhi hum object dete hai toh  use ye nhi pata hota ki kis object pe yeh method run karna chahte hai
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));


const course = {
    coursename: "js in Hindi",
    price: "999",
    courseInstructor: "Krishna"
}

//console.log(course.courseInstructor) // isko baar na liukhna pade isliye doosra syntax use karte haai 

//const {kon si} = {kha se}
const {courseInstructor: instructor} = course // agar lge ki course instructor jyada bada naam hai toh aap isko apne hisaab se naaam de sakta hai kisi bhi value ka destructure kar sakte hai
//
//console.log(courseInstructor);
console.log(instructor);


// For Reacts

// const navbar = ({company}) => { // yaha destructuring kar sakte hai means curly braces ka use krke apne mn ka variable likh sakte hai

// }
// navbar(company = "Krishna")


// apna kaam kisi aur ko pehna do use hi API kehte hai

// {// isi ko JSON kehte hai isi keys aur value dono string hoti hai
// "name": "Krishna",
// "coursename": "js in Hindi",
// "price": "free"

// }

[
    {},
    {},
    // zaruri nhi hai ki API call karne pr object mile humko array bhi mil sakta hai
]