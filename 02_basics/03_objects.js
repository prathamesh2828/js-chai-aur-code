//singleton (esa ek hi object hai jab constructors se object banate hai)
// Object.create (this is the constructor method to create the object)


//object literals 

const mySym = Symbol("key1")

const jsUser = {
  name: "Parthamesh",
  "full name" : "Prathamesh ashok shinde",
  [mySym]: "myKey1", //note the syntaxx of using keys [mySym] or else it will treat it as other things
  age: 21,
  location:"aurangabad",
  email:"prathamesh@gmail.com",
  isLogeedIn: false,
  lastLoginDays: ["Monday","Saturday"]
}

console.log(jsUser.email);
console.log(jsUser["email"]);
console.log(jsUser["full name"]);
console.log(jsUser[mySym]);

jsUser.email = "prathamesh1515@gmail.com"
console.log(jsUser["email"]);

// Object.freeze(jsUser)
jsUser.email = "vaish@ppmail"
console.log(jsUser["email"]);

console.log(jsUser);

jsUser.greeting = function(){
  console.log("hello JS user");
}

jsUser.greetingTwo = function(){
  console.log(`hello JS user, ${this.name}`); //here we use this because we want acces the elements inside our object.
}

console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());






