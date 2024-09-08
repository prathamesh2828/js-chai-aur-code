// primitive 

// 7 types: String , number, boolean, null(empty), undefined, symbol, bigInt 

const score = 100  // returns number
const scoreValue = 100.3 // returns number

const isLoggedIn = false  //returns boolean
const outsideTemp = null // returns object as type
let userEmail;

const id = Symbol('123')  // return type symbol
const anotherId = Symbol('123')


console.log(id === anotherId);


const bigNumber = 13541654315461512n //big int after applying n after the number.

const heros = ["shaktiman", "naagraj","doga"] // returns object as type

let myObj = {
  name: "prathamesh",
  age : 21,
}


 const myFunction = function(){  // returns function as type (function object)
  console.log("hello world");
 }

 console.log(typeof id);
 

// Refernce type(non primiitive)

// array, objects, functions.



// memory in js
// stack (Primitive), heap (non- Primitive)


let myYoutubename = "prathameshshindedotcom"

let anotherName = "chaiaurcode";

// console.log(myYoutubename);
// console.log(anotherName);

let userOne ={
  email: "user@google.com",
  upi: "user@ybl"
}

let userTwo = userOne

userTwo.email="prathamesh@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);





