// const tinderUser = new Object()
const tinderUser ={} 

tinderUser.id = "123abc"
tinderUser.name = "John Doe"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
  email: "some@gmail.com",
  fullname: {
    userFullName:{
      firstname:"prathamesh",
      lastname:"shinde"
    }
  }
}

// console.log(regularUser.fullname.userFullName.firstname);

//optional chaining fullname? will see if there is fullname in regularUser if ther is then it will performm the next step.


const obj1 ={1:"a",2:"b"}
const obj2 ={3:"c",4:"d"}
const obj4 ={5:"e",6:"f"}


// const obj3 = {obj1,obj2}


// object assign method
//  const obj3 = Object.assign({},obj1, obj2, obj4)

const obj3 = {...obj1,...obj2,...obj4}
// console.log(obj3);

const users =[ 
  {
       id:1,
       email:"h@gmail.com"
  },
  {
    id:1,
    email:"h@gmail.com"
  },
  {
  id:1,
  email:"h@gmail.com"
  }, 
  { 
  id:1,
  email:"h@gmail.com"
  },
]

users[1].email
// console.log(tinderUser);

// console.log(Object.keys(tinderUser));  //important..
// console.log(Object.values(tinderUser));  //important..
// console.log(Object.entries(tinderUser));  //important..


// console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// console.log(tinderUser.hasOwnProperty('isLogged'));



//destructuring of objects

const course = {
  coursename: "js in hindi",
  price: "999",
  courseInstructor: "hitesh" 
}

// course.courseInstructor

const {courseInstructor: instructor} = course

// console.log(courseInstructor);
console.log(instructor);


// const navbar = ({company}) => {
// }
// navbar(company ="hitesh")

// api call

// {
//   "name": "prathamesh",
//   "coursename": "js in hindi",
//   "price": "free" 
// }

//    [
//     {},
//     {},
//     {}
//    ]




