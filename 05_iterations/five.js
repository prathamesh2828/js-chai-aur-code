const coding = ["js","ruby","java", "python", "cpp"]

// coding.forEach( function (val){
//   console.log(val);
// } )

// coding.forEach ( (item) => {
//   console.log(item);
// } )


// function printMe(item){
//   console.log(item);
// }
// coding.forEach(printMe)

coding.forEach ( (item,index,arr) => {
  // console.log(item, index,arr);
} )

const myCoding = [
  {languageName: "javascript",
    languageFileName:"js"
  },

  {languageName: "java",
    languageFileName:"java"
  },

  {languageName: "python",
    languageFileName:"py"
  }
]

// very important (to get value from object in the array using forEach loop. )
myCoding.forEach( (item)=> {
  console.log(item.languageName);
} )


