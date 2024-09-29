function sayMYname(){
    console.log("M");
    console.log("O");
    console.log("N");
    console.log("I");
    console.log("K");
    console.log("A");
}
//sayMYname()
//sayMYname


// function addTwoNumber(num1,num2){
//     console.log(num1+num2)
// }
// const result = addTwoNumber(3,5)

// console.log("result" , result)


function addTwoNumber(num1, num2) {
 
    // let result = num1 +num2
    // return result
    return num1+num2
}
// const result = addTwoNumber(3,4)
// console.log("result" , result)

function login(username = "sam"){
    if(!username ){
console.log("plz enter a username")
return
    }
    return `${username} just logged in`
}
console.log(login("monika"))
