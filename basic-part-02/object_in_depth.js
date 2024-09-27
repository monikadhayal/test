//singleton

//object literals

const mySym = Symbol("key1")

const jsUser ={
    name: "monika",
    "full name ": "monika chahar",
    [mySym]: "mykey1",
    age: 23,
    location: "sikar",
    email: "moniak@gamil.com",
    isloggedIn: false,
    lastLoginDays: ["monday", "saturday"]
}

// console.log(jsUser.name)
// console.log(jsUser["age"])
// console.log(jsUser["fullName"])
// console.log(jsUser[mySym])
//   console.log(typeof jsUser.mySym)
// jsUser.name = "akshay"
// Object.freeze(jsUser)
// jsUser.name = "monika"
// console.log(jsUser)

jsUser.greeting = function(){
    console.log("hello js user");
}
jsUser.greetingTwo = function(){
    console.log(`hello js user, ${ this.name}`);
}
console.log(jsUser.greeting());
console.log(jsUser.greetingTwo());
