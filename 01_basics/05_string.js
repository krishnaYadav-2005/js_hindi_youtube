const name = "Krishna" 
const repoCount = 50

console.log(name + repoCount + "Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`)  // this method is called string interpolation method 

// second method of declaration of string

const gameName = new String('hitesh-hc-com') // js me string ko single aur double me bhi use kr sakte hai

console.log(gameName[0]);
console.log(gameName.__proto__);

console.log(gameName.length);
console.log(gameName.toUpperCase());
console.log(gameName.charAt(2 )); // kon sa char kis index pr hai
console.log(gameName.indexOf('t')); // char ki position ke liye

const newString = gameName.substring(0,4) // n-1 chalega isme neg value nhi de sakte
console.log(newString);


const anotherString = gameName.slice(-8,4) // it allows neg values
console.log(anotherString);

const newStringOne= "   hitesh   "
console.log(newStringOne);
console.log(newStringOne.trim());  // isme ye space remove kar deta hai trim function

const url = "https://hitesh.com/hitesh%20choudhary"  // brower space ko nhiu samajh pata hai isliye %20 daala hai

console.log(url.replace('%20', '-'))

console.log(url.includes('hitesh')) // isse pooch sakte hai ki hitwesh hai ya nhi
console.log(gameName.split('-'));





