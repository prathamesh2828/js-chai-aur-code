
// createing the promise
const promiseOne = new Promise(function(resolve,reject){
  //do an async task 
  // DB calls, cryptography , network 
   setTimeout(function(){
    console.log('Async task is complete');
    resolve();
   },1000)
}) 


// consuming the promise
promiseOne.then(function (){
  console.log("promise consumed");
})

new Promise (function (resolve, reject){

  setTimeout(function(){
    console.log("async task 2");
    resolve();
  },1000)
}).then(function(){
  console.log("async 2 resolved");
})


const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
      resolve({username:"chai", email:"chai@example.com"})
    }, 1000)
})

promiseThree.then(function(user){
  console.log(user);
})


// const promiseFour = new Promise(function(resolve,reject){
//   setTimeout(functiom(){
//     let error = true
//     if (!error){
//       resolve({username:"prathamesh", password: "123"})
//     }
//   },1000)
// })


const promiseFour = new Promise (function(resolve, reject){
  setTimeout(function(){
    let error = false
    if(!error){
      resolve({username:"prathamesh", password: "123"})
    }
    else{
      reject("error:something went wrong")
    }
  },1000)
})


promiseFour.then((user)=>{
    console.log(user);
    return user.username
})
    .then((username)=>{
     console.log(username);
})
  .catch(function(error){
   console.log(error);
})
.finally(()=> console.log("promise is either resolved or rejceted"));




const promiseFive = new Promise(function(resolve,reject){
  setTimeout(function(){
    let error = false
    if(!error){
      resolve({username:"javascript", password: "123"})
    }
    else{
      reject("error:JS WENT WRONG")
    }
  },1000)
})

async function  consumePromiseFive(){
 try {
  const response =  await promiseFive
  console.log(response);
 } catch (error) {
  console.log(error);
 }
}

consumePromiseFive()


// async function getAllUsers(){
//  try {
//   const response = await fetch('https://jsonplaceholder.typicode.com/users')
//   const data = await response.json()
//   console.log(data);
//  } catch (error) {
//   console.log("error occured:",error);
//  }
// }

// getAllUsers()

fetch('https://api.github.com/users/hiteshchoudhary')
.then((response)=>{
  return response.json()
})
.then((data)=>{
  console.log(data);
})
.catch((error)=>console.log(error));


