var c = 300


//outside the if all the wriiten is global scope
if(true){ //whats written in the if is  block scope 
  let a = 10
  const b = 20
  var c = 30
  // console.log("INNER ",a) //10 20 30
}



// console.log(a);
// console.log(b);
// console.log(c);

function one(){
  const username = "prathamesh"

  function two (){
    const website = "youtube"
    // console.log(username);
  }
  // console.log(website);
  two()

}

// one()

if(true){
  const username = "prathamesh"
  if(username === "prathamesh"){
    const website = " youtube"
    // console.log(username+website);
  }
  // console.log(website);
  
}

// console.log(username);



//++++++++++++++++ intresting ++++++++++++++++++++

console.log(addone(5));

function addone(num){
  return num+1
}


addTwo(5)
const addTwo = function(num){
  return num+2
}

