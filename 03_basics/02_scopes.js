// var c = 300
let a = 300

if (true) {
let a = 10
const b = 20
// var c = 30
// console.log("INNER: ",a);
}
// for (let i = 0; i < array.length;i++){
//     const element = array[i]    
// }
// block scope mai value bhrr wali le sakta hai agr ham let use krke change krre hai to but ham inner use krke bhi value change kr sakte hai
// the value can not be change when we put the value and declare var value outside the block it will only work if we do not write the var inside the block 


// console.log(a);
// console.log(b);
// console.log(c);

// what we write in the if they are block scope 
// what we write outside the if they are global scope

// {} we call it scope of any thing which was in the js like if ,else and anything other in this we use scope of it

// DOM (document object model)

// Nested scopes

function one(){
    const username = "nikhil"
    function two(){
         const website = "moringa"
         console.log(username);    
    }
    // console.log(website);
    two()
}
// one()

if (true) {
    const username = "Nikhil"
    if (username === "Nikhil") {
        const website = " youtube"
    //    console.log(username + website);
    }
    // console.log(website);
    
}
// console.log(username);

// +++++++++++++++++++++++++++interesting+++++++++++++++++++++++++++++++++++++++++++

console.log(addone(5))
function addone(num){
    return num + 1
}
 
 
 const addTwo = function(num){
    return num + 2
 }
//  addtwo(5)
//  these are two types of techniques of making function and there are these
