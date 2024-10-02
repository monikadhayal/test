//object ke liye for in loop hota h na ki for of

const myObject ={
    js: 'javascript',
    cpp: 'c++',
    rb: 'ruby',
    swift:'swift by apple'
}

for(const key in myObject) {

    // console.log(key);
    // console.log(myObject[key]);
}

// *********this for loop not for object***********//
// const myObject = {
//   game1: "ludo",
//   game2: "ludo2",
// };

// for (const [key, value] of myObject) {
//   // console.log(key, ':-', value);
// }

const programming = ["js","rb","py","c++","c"]

for(const key in programming) {
   // console.log(programming[key]);
}

const map = new Map(); //for in se ye print nhi hota h 

map.set("m", "monika");
map.set("m", "monika");
map.set("a", "akshay");
map.set("c", "chahar");

//console.log(map)

for (const key in map) {
 // console.log(key);
}

