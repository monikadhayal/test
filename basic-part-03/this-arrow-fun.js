const user ={
    username: "monika",
    prize:999,
    welcomeMsg: function(){
        console.log(`${this.username} , welcom to website`)
        console.log(this)
    }
     
}
// user.welcomeMsg()
// user.username="aku"
// user.welcomeMsg()




//console.log(this);
// function chai(){
//     // let usrename ="moika"
// console.log(this);
// }
// chai()



// const chai = function (){
//      let usrename ="moika"
// console.log(this.username);
// }


const chai =  () => {
     let usrename ="moika"
console.log(this);
}
//chai()

// const addTwo = (num1,num2) => {
//    return num1+num2
// }
// const addTwo = (num1, num2) =>  num1 + num2;

//const addTwo = (num1, num2) =>  (num1 + num2) 

const addTwo = (num1, num2) =>  ({username: "monika"})

console.log(addTwo (2,3))

const myArray = [2,3,4,5,6]

//myArray.forEach(function (){})
//myArray.forEach( () => {})