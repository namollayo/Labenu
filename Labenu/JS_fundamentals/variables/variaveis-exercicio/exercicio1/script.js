// Part 1
let _name
let _age
console.log(typeof _name, _age);
/* When using the variable let there was an error, cause the const variable can be changed after it 
already has a value setted, but in this way the value was defined as "undefined", so that's the reason of the bug
When let is used, we have "undefined" printed in our screen, because we didn't put any value inside our variable, not even null*/
_name=prompt("What's your name?")
_age=prompt("What's your age?")

console.log(_name, _age);
console.log(typeof _name);
console.log(typeof _age);
/*Both variable, _name and _age, aren't type undefined anymore, they now are 'string' type, not, even though one is composed only by numbers*/
console.log("Hello", _name+", you're", _age, "years old.");

// Part 2

/*a)
let _answer1 = prompt("Do you have pets?")
let _answer2 = prompt("Do you like cats?")
let _answer3 = prompt("Do you want to adopt a cat?")

console.log(_answer1,_answer2,_answer3);*/

const _quest1 = "Do you have pets?"
const _quest2 = "Do you like cats?"
const _quest3 = "Do you want to adopt a cat?"

let _answer1 = prompt(_quest1)
let _answer2 = prompt(_quest2)
let _answer3 = prompt(_quest3)

console.log(
    `${_quest1},${_answer1},\n ${_quest2},\n ${_answer2},${_quest3},${_answer3}`
 );

