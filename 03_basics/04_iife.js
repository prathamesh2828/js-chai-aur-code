
// Immediately Invoked Function Expression (IIFE)

(function chai(){
  //named IIFE
  console.log(`DB CONNECTED`);
})();

 // first () is for defining function and second() is for execution of the defined function. 
//use ; after execution of iife so it will be error free when u run the next iife.

//  ( function aurcode(){
//   console.log('DB CONNECTED two');
// })();

( (name) => {
  //unnamed IIFE
  console.log(`DB CONNECTED two ${name}`);
})('prathamesh');