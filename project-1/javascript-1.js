const box = document.querySelectorAll(".square");
const body = document.querySelector("body")

box.forEach(function (square) {
    console.log(square);
    square.addEventListener("click",function(e){
        console.log(e)
        console.log(e.target)
        if(e.target.id === 'yellow'){
            body.style.backgroundColor = e.target.id;
        }
         if (e.target.id === "pink") {
           body.style.backgroundColor = e.target.id;
         }
          if (e.target.id === "blue") {
            body.style.backgroundColor = e.target.id;
          }
           if (e.target.id === "red") {
             body.style.backgroundColor = e.target.id;
           }
    })
});
