//  Singleton

// object literals

const mySym = Symbol("key1")
const JsUser = {
    name : "nikhil",
    "full name" : "Nikhil Chauhan",
    [mySym] : "mykey1",
    age :18,
    location : "delhi",
    email : "nikhil@google.com",
    isLoogedIn : false,
    lastloginDays : ["monday", "saturday"]
}
console.log(JsUser.email);
// we use .email or something to console and find out by using . in it and tehre is another method also in this
console.log(JsUser["email"]);
// we use this by do not using . in it we use [] these to find out 
// in full name we do not use this . method bcz there is string and we can't console that with .method so we use []this method
console.log(JsUser[mySym]);

JsUser.email = "nikhil@google.com"
Object.freeze(JsUser)
// we use this freeze method to freeze that email or something else after this value can't be change
JsUser.email = "nikhil@yahhoo.com"
Object.freeze(JsUser)
kdiuwgq
