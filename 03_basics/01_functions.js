


function SayMyName(){
  console.log("P");
  console.log("R");
  console.log("A");
  console.log("T");
  console.log("H");
  console.log("A");
  console.log("M");
  console.log("E");
  console.log("S");
  console.log("H");
}


// SayMyName()
// here SayMyName is the reference and () is execution 

// function addNumber(num1,num2) 
// here we pass parameters in the function that is num1 and num2.
// {
//   console.log( num1 + num2);
// }

function addNumber(num1, num2)
{
  // let result = num1 + num2
  // return result
  return num1+num2
}

// addNumber(3,5) 
//we have to pass the arguments in the function.

const result = addNumber(3, 5)

// console.log("result: ", result);

function loginUserMessage(username ="sam"){
  // if(username === undefined)
  if(!username){
    console.log("please enter a user name..");
    return
  }
  return `${username} just logged in`
}

// console.log(loginUserMessage())

function calculateCartPrice(val1,val2,...num1){
   return num1 
}

console.log(calculateCartPrice(200,300,500,2000));

const user = {
  username: "prathamesh",
  price: 199
}

function handleObject(anyobject){
  console.log(`username is ${anyobject.username} and prize is ${anyobject.price}`);
}

// handleObject(user)
handleObject({
  username: "sam",
  price: 400
})


const myNewArray = [200, 400, 100, 600]

function returnSecondValue(getarray){
  return getarray[1]
}

// console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([200,300,400,500]));

