// const tinderUser = new Object{} this is sinleton object

const tinderUser = {}
// and this is non-singletoon object
tinderUser.id = "123abc"
tinderUser.name = "nikhil"
tinderUser.isLoggedIn = false

// console.log(tinderUser)
const regularUser = {
 email : "nikhil@gmail.com",
 fullName : {
    userfullname : {
        firstname : "Mani",
        lastname : "chauhan"
    }
 }
}
// console.log(regularUser.fullName.userfullname.lastname);
// if we want to console anything then we use .notation in it and add anything in it

const obj1 = {1: "a",2: "b"}
const obj2 = {7: "c",4: "d"}

// const obj3 = {obj1, obj2}
// const obj3 = Object.assign({},obj1,obj2)

const obj3 = {...obj1, ...obj2}
console.log(obj3);

const users = [
  {
    id:1,
    email : "nikhil@gmail.com"
  },
  {
    id:1,
    email : "nikhil@gmail.com"
  },
  {
    id:1,
    email : "nikhil@gmail.com"
  }
]

users[1].email
console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser));

console.log(tinderUser.hasOwnProperty('isLoggedIn'));
// this is to verify the line in this code this value exist or not this method is used to find out the value is existing or not in the code

const course ={
  coursename : "js in hindi",
  price : "999",
  courseInstructer : "Nikhil"
}
// course.courseInstructer

const {courseInstructer} = course
// we use this method to find out one value in this wiyhout writing again and again in this 
console.log(courseInstructer);

// after this we find out api and json , api is like the database in the javascript ans json is like to hold and resolve the data in the readable language data 
// to sollve and read and read the data 
{
  []
}
//  json is start witrh the {} and in it we use array ,sometimes we start ith the array and there are objects in it 

