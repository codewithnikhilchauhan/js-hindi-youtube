
// Function is a type of data where we put 5 lines or 10 lines anylines which u want and u can put in a bunch and take it to anywhere a copy of that data wherever you want

// in this we can use any name to call the function just like saymyname in it and aftyer that () this is scope in the function 

function sayMyName (){
console.log("N");
console.log("I");
console.log("K");
console.log("H");
console.log("I");
console.log("L");
}
// () we call this sign paranthesis if we want to execute this function we simply type the function what we put in the functiion and use parenthesis to execute

// sayMyName()

// function addTwoNumbers (number1, number2){
//     console.log(number1 + number2);
    
// }
function addTwoNumbers (number1, number2){
    // let result = number1 + number2
    // console.log("nikhil");
    // return result
    return number1 + number2
    // u can directly execute these 1 and 2 numbers
}
// after putting return in the code we can't change any code

// if we want to add some values in the function so we add like this and call just like we calling in the upper function by its name 

// addTwoNumbers()


// if we do not give any value to the numbers so we get nan but if we give some like this we get value in it addTwoNumbers(3, 4)
// and in another case we add the value like this addTwoNumbers(3, "4") so we get the ouitput like 34 it will not add the value in it

const result = addTwoNumbers(3,5)

// console.log("Result: ", result);

function loginUserMessage(username){

if (username === undefined){
console.log(" Please enter a username ");
return
}
return `${username} just logged in`
}
console.log(loginUserMessage("nikhil"));
// we use return to stop executing the after value of return uske baad wali values execute honi bnd ho jaati hai jb return use krte hai to

function calculateCartPrice (...num1){
    // function calculateCartPrice (val1, val2,...num1){  in this we use these the output. will be after the starting 2 digit cut on this output shuru k do digit cut ho jaati hai jitne usme val123 jo bhi hai wha tkk k 
    return num1
}
console.log(calculateCartPrice(200, 400, 600));

// in this we see there are two or more values if we want to print themm all values in the compiler so we use ...num1 to print all the values it is based on website how many things money will we added in a cart

const user = {
    username : "nikhil",
    price : 900
}
function handleobject(anyobject){
    console.log(`Username is ${anyobject.username} and price is ${anyobject.price}`);
    
}
// handleobject(user)
handleobject({
    username : "mani",
    price : 200
})
// this is the second option how to execute the code 
// after that we will check by passing array in it

const myNewArr = [200, 400, 100, 800]

function getSecondArray(getArray){
    return getArray[1]
}
// console.log(getSecondArray(myNewArr)); this is the first method to execute 
// this is the second method to execute 
console.log(getSecondArray([100, 400, 299, 800]))