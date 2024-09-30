 //for


//  for(let i=0; i<10; i++){
//     const element = i;
//     if(element == 5){
//       console.log("5 is best number");
//     }
//     console.log(element);
//  }

//console.log(element);

 for(let i=0; i<=10; i++){
//     console.log(`outer loop value:${i}`);
   for(let j=0; j<=10; j++){
//         console.log(`inner loop value ${j} ans inner loop ${i}`)
     }
 }
 
let myArray = ["mon", "tus" , "web" ,"thurs" ,"fri","sat","sun"]

//console.log(myArray.length);
for(let i =0; i<myArray.length; i++){
    const element = myArray[i];
 //   console.log(element);
}


// break  and  continue loop

for(let i =1; i<20; i++){

    if(i == 5){
        console.log(`Detected 5`)
        continue;
      //  break;
    }
    console.log(`value of i is ${i}`);
}
