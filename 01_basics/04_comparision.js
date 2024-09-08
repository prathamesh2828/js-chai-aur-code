// console.log(2 > 1);
// console.log(2 >= 1);
// console.log(2 < 1);
// console.log(2 == 1);
// console.log(2 != 1);


console.log("2" > 1); // will give true
console.log("02" > 1); // will give true

// console.log(null>0); //false
// console.log(null==0); //false
// console.log(null>=0); //true

//its true because an equality check == and comnparisions > <> = <= work differntly.
// comparisons convert null to number, treating it as 0 
//thats why null>=0 is true and null>0 is false.

// console.log(undefined==0);
// console.log(undefined>0);
// console.log(undefined<0);

// ===  strict check (also checks the data type)

console.log("2" === 2); //false


