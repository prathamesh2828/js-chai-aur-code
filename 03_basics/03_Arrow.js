
// this is used for reffering the current context.

const user ={
  username:"prathamesh",
  price:999,

  welcomeMessage: function(){
    console.log(`${this.username} , welcome to website`);  
    // console.log(this);  
  }

}

// user.welcomeMessage()
 // we used this so it reffered to the context where usernbame was prathamesh

// user.username = 'sam'
// user.welcomeMessage()
// here it will use username as sam.as the context changes.

// console.log(this);
// when we run this in node then we get {} but if we run it in browser then it will printing 'undefined' .
// this is because in browser we have window object and in node we have global object.

// function chai(){
//   let username = 'prathamesh'
//   console.log(this);
// }
// chai()


// const chai = function(){
//   let username ="prathamesh"
//   console.log(this.username);
// }

const chai = () => {
  let username ="prathamesh"
  console.log(this);
}

// chai()


// here we use explicit return( we have to use return keyword as it is written inside the {} )
// const addTwo = (num1, num2) => {
//   return num1 + num2
// }


// implicit return (no need to write return as it is a single lined statement.)
// const addTwo = (num1, num2) =>  num1 + num2

// if we wrap the num1+num2 in {} then we have to write the return keyword inside it but, if we use () then we dont need to write the return keyword in it.
// const addTwo = (num1, num2) =>  (num1 + num2)

// const addTwo = (num1, num2) =>  {username:"prathamesh"}
// this will print undefined as it is not inside the()
// so if we use ( {username:"prathamesh"}) then it will run as it should..
const addTwo = (num1, num2) =>  ({username:"prathamesh"})


console.log(addTwo(3,4))


// const myArray = [2,3,5,6,7,8]

// myArray.forEach() 
