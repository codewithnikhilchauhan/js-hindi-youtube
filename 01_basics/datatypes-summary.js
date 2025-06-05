// primitive 

// 7 types: string , number, boolean, null=empty not 0,undefined, symbol, bigInt

const score = 100
const scoreValue = 100.2

constIsLoggedIn = false
const outsideTemp = null
let userEmail;

constId = Symbol('123')
constAnotherId = Symbol('123')

//console.log(id === anotherId);
const bigNumber = 63523738367537

// refrence (non primitive)

//array, objects, functions
// we write arrays in square bracket

const heros = ["hulk", "captain","marvel"];
let myobj ={
    name: "nikhil",
    age: 20,
}
const myFunction = function(){
    console.log("hello world");
    
}
//console.log(typeof anotherId);


//  +++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive) , Heap(Non-Primitive)

let myYoutubename ='nikhilchauhandotcom'

let anothername = myYoutubename
anothername = "chaiaurcode"

console.log(myYoutubename);
console.log(anothername);

let userOne ={
    email :"user@google.com",
    upi:"user@ybl"
}

 let userTwo = userOne

 userTwo.email = "nikhil@gmail.com"

 console.log(userOne.email);
 console.log(userTwo.email);
 
 

