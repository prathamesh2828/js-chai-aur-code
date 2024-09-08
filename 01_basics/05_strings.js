const name = "prahamesh" // method 1 to declare the string..
const repoCount = 50

// console.log(name + repoCount + " value"); //old way to concanitate the string


console.log(`hello my name is ${name} and my repo count is ${repoCount}`); //new way to concatinate the string ( also known as: string interpulation)

const gameName = new String('pratham')

// console.log(gameName[0]);

// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());

console.log(gameName.charAt(2));
console.log(gameName.indexOf('a'));


 const newString = gameName.substring(0 ,4) // this will have numbers from 0-3 and 4 will not be inculded.
 console.log(newString);

 const anotherString = gameName.slice(-8, 5)
 console.log(anotherString);

const newStringOne = "    prathamesh    "
console.log(newStringOne);
console.log(newStringOne.trim());


const url = "https://prathamesh.com/prathamesh%20shinde"

console.log(url.replace('%20' , '-'));
 

console.log(url.includes('prathamesh'));


console.log(gameName.split('-'));


 
