// if
const isUserLoggedIn = true
const temperature = 41

// if(temperature < 50){
//   console.log("less than 50")
// }
// else{
//   console.log("temperatur is more than 50")
// }

// console.log("executed")


// <, >, <=, >=, 
// ==(just checks the value to be equal) , 
// !=,
// === (strict check- also checks the type of the given number and it should match then only its true) 
// !== (strict check- also checks the type of the given number and it should not match then

// const score = 200

// if (score>100){
//   const power = 'fly'
//   console.log(`User power ${power}`);
// }

// console.log(`User power ${power}`);
// power is not defined here so it will throw an error because of scope , power is limitted to the if scope.
// const keyword is used so the scope is limmited to the if but, if we use var instead of const then we will be able to print the output without the error.



// const balance = 1000

// if (balance > 500) console.log("test");

// if (balance < 500){
//   console.log("less than 500");
// }
// else if(balance < 750){
//   console.log("less than 750");
// }
// else if(balance < 900){
//   console.log("less than 900");
// }
// else{
//   console.log("less than 1200");
// }

const userLoggedIn = true
const debitCard = true
const loggedInFromGoogle = false
const loggedInFromEmail = true

if (userLoggedIn && debitCard && 2==3) {
  console.log("allow to buy coarses");
}

if(loggedInFromGoogle || loggedInFromEmail){
  console.log("user logged in");
  
}