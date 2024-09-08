// for of (array specidic loops)

// ["","",""]
// [{},{},{}]

const arr = [1,2,3,4,5]

for (const num of arr) {
  // console.log(num);
}

const greetings = "Hello world!"
for (const greet of greetings) {
  // console.log(`each char is ${greet}`);
}

// maps {key value pair}
// map is a function that returns a new array with the results of applying a provided function on every

const map = new Map()
map.set('IN', "INDIA")
map.set('USA', "UNITED STATES OF AMERICA")
map.set('UK', "UNITED KINGDOM")
map.set('IN', "INDIA") // this will not be printed again as there are no duplicates in map.(if there is then it is ignored..)


// console.log(map);


for (const [key, value] of map) {
  // console.log(key, ":-", value); 
}

const myObject ={
  'game1': 'NFS',
  'game2': 'FIFA',
}

for (const [key, value] of myObject) {
  // console.log(key, ':-', value); 
}