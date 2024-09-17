 //primitive

 // 7 type : String ,number , Boolearn ,null, undefined, Symbol, bigInt

 

 //javascript dynamic langvage h

 const score = 100
 const scoreValue = 100.3

 const isLoggedIN = false 
 const outsideTemp = null
 
 let username;

 const id = Symbol('123')
 const anotherId = Symbol('123')

//  console.log(id === anotherId)

 const bigNumber = 1234567812345671234567n

//reference (non primitive)
 // array, object , function 

const heros = ["shaktiman" ,"naagraj" ,"doga"]
let myObj={
   
    name:"monika",
    age:"23",
}

const myfunction = function(){
    console.log("hello world!")
}

// console.log( typeof bigNumber)

// console.log(typeof myfunction);


//***************************************************//

//stake (primitive) ,heap (non-primitive)
let myPgName = "monika"
 let otherName ="akshay"

 otherName ="dhayal"
 console.log(myPgName)
 console.log(otherName)

 let userOne ={
    email: "monika@gmail.com"
    
 }

 let userTwo = userOne
 userTwo.email = "akshay@gmail.com"
//  Password: "monika"
 console.log(userTwo.email)
 console.log(userOne.email)