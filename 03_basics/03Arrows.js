
const user = {
  username: "umar",
  price: 999,

  welcomeMessage: function() {
    console.log(`${this.username}, welcome to website`) // this here means the context of this obj
    console.log(this);
    
  }
}

// user.welcomeMessage()
// user.username = "Farooq"
// user.welcomeMessage()

// console.log(this);


// function chai(){
//   let username = "umar"
//   console.log(this.username) // this wont work in function it will work in object 
// }
// chai()

// const chai = function(){
//   let username = "Umar"
//   console.log(this.username) //this wont work as well
  
// }
// const chai = () => {
//   let username = "umar"
//   console.log(this.username);
  
// }

// chai()

// const addTwo = (num1, num2) => { //explicit arrow
//   return num1 + num2 
// }

// const addTwo = (num1, num2) => num1 + num2 //implicit arrow doesnt needd return 
// const addTwo = (num1, num2) => (num1 + num2) //anotherway
// {} uses return () does not
const addTwo = (num1, num2) =>({username:"Umar"}) // obj needs {}

console.log(addTwo(3, 4))



