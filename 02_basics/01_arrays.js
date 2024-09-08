//arrays

const myArr = [0,1,2,3,4,5]
const myHeros = ["shaktiman", "naagraj"]


// const myArr2 = new Array(1,2,3,4)
// console.log(myArr[1]);
// console.log(myArr2[0])


// js is zero based indexing
// js array copy operations create 'shallow copies'
// shallow copies-    of an object is a copy whoes properties share the same refernce point , as a result when u change either the source or the copy you may also cause the other object to change too.
// deep copies- this do not share the same refernece point so no change after changing either of the objects



//array methods

// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9)
// myArr.shift()

// console.log(myArr.includes(9));
// console.log(myArr.indexOf(3));

// const newArr = myArr.join()
 //ADDS ALL THE ELEMENT INTO THE STRING.

// console.log(myArr)
// console.log( typeof newArr); 
//here newArr will be converted into string


//slice, splice

console.log("A ", myArr);

const myn1 = myArr.slice(1 , 3)  //returns the perticular section of array  (this will start from 1 and end till to because it will not consider 3 - so the ans is [1,2])

console.log(myn1);
console.log("B ",myArr);


const myn2 = myArr.splice(1,3)
console.log("c ",myArr); //after splice the output of our arr[] is [0,4,5] because we spliced the (1,3) into the myy2
console.log(myn2); //hence the my2 will give us the output [1,2,3]






