const marvel_heros = ["thor" ,"IronMan","spiderman"]
const dc_heros = ["superman" ,"flash","batman"]

// marvel_heros.push(dc_heros)

// console.log(marvel_heros);
 // this wil give us the outpt - [ 'thor', 'IronMan', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//  const allHeros =  marvel_heros.concat(dc_heros)
//  console.log(allHeros);
 

//spread operator imagine a shattered glass which are spread o the floor

const all_new_heros = [...marvel_heros, ...dc_heros]
console.log(all_new_heros);

//concat and spread are same but concat can be used only for conacting 2 array but spread can be used to concat two or more arrays..

const another_array = [1,2,3,[4,5,6],7,[6,7,[4,5]]]
const real_another_array = another_array.flat(Infinity)
console.log(real_another_array); 




console.log(  Array.isArray ("prahamesh"));
console.log(  Array.from ("prahamesh"));
console.log(  Array.from ({ name:"prathamesh"})); // intresting case 

let score1 = 100 
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));




