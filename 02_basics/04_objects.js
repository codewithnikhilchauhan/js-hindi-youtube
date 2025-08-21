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
const obj2 = {1: "a",2: "b"}

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
userskduge


