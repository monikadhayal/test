// Immediately Invoked Function Expressions IIFE


// function chai(){
//     console.log(`DB CONNECTED`)
// }

// chai()

(function chai() {        // this is name IIFE
  console.log(`DB CONNECTED`);
})();

//()()
//ye upper vali dono same h aap dono tariko se kar sakte h 

( () => {

   console.log(`DB CONNECTED`);
})();  

//aap function ko is tarh se call karo to aap semicolun jarur lagaye
((name) => {             // paramerte vali iife
  console.log(`DB CONNECTED ${name}`);
})("monika");  

//agar puch do IIFE ko ek sath likho to semicolun laga do 
