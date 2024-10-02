// forEach loop return value nhi karta h 

const coding = ["js", "c++", "c", "java", "py"];
 

const values = coding.forEach((item) => {
    //console.log(item);
    return item
})

//console.group(values);


  const myNums = [1,2,3,4,5,6,7,8,9,10]

//  const newNums = myNums.filter((num) => {  // jab aap {} ye use karte ho to return karna padega varna () is me nhi karna padhta h 
//     return num >4
//  })

const newNums = []
myNums.forEach( (item) => {
    if(item > 4){
        newNums.push(item)
    }
})
 //console.log(newNums);
  

//  *************filter**********************//

 const result = myNums.filter( (num) => {return num % 3 === 0})

 //console.log(result);

  