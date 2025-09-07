const coding = ["js","py","ruby"]

// coding.forEach( function (item){
//   console.log(item);
  
// } ) 
// coding.forEach(  (item) => {
//   console.log(item);
  
// } ) 
// function printMe  (item)  {
//   console.log(item);
  
// }  

// coding.forEach(printMe)

//  coding.forEach(  (item, index, arr) => {
//    console.log(item, index, arr);
//  } ) 


const myCoding = [
  {
    languageName: "javascript",
    fileName: "js"
  },
  {
    languageName: "java",
    fileName: "java"
  },
  {
    languageName: "python",
    fileName: "py"
  }
]

myCoding.forEach((item)=>{
  console.log(item.languageName);
  
}
)