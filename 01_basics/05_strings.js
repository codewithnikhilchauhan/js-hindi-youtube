const name = "nikhil"
const repoCount = 50

//console.log(name + repoCount + " value");

console.log(`hello my name is ${name} and my repocount is ${repoCount}`);

const gameName = new String('nikhilnc')

//console.log(gameName[0]);
//console.log(gameName.__proto__);

//console.log(gameName.length);
//console.log(gameName.toUpperCase());

console.log(gameName.charAt('4'));
console.log(gameName.indexOf('i'));

const newString = gameName.substring(0,4)
console.log(newString);

const anotherString = gameName.slice('-8,4')
console.log(anotherString);

const newStringOne = "   nikhil    "
console.log(newStringOne);
console.log(newStringOne.trim);

const url = "https://nikhil.com/nikhil%20chauhan"

console.log(url.replace('20','-'));







