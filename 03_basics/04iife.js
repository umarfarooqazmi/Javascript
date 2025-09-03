// Immediately Invoked Function Expression (IIFE)
(function chai(){
  //named iife
  console.log("DB CONNECTED")
})();
// this is how you write IIFE and ; this is used to eand iife
((name) => {
  console.log(`DB CONNECTED 2 ${name}`)
})("Umar")