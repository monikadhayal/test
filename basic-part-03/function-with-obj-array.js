function calculateCarprize(val1,val2,val3,...num1){
   return num1
}

console.log(calculateCarprize(200,400,500,20000))

const user ={
   username: "monika",
   price: 199
}

function handleObject(anyobject){
console.log(`username is ${anyobject.username} and price is ${anyobject.price}`)
}
//handleObject(user)
handleObject({
  username: "monka",
  price: 19,
});

const myNewArray =[200,400,500,600]

function returnSecondValue(getArray){
   return getArray[2]
}

//console.log(returnSecondValue(myNewArray));
console.log(returnSecondValue([ 324,200, 300, 400, 500,100]));