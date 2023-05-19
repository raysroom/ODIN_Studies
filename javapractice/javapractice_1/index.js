// First Javascript code
console.log('Hello World');

//let isApproved = true; Boolean Literal
//let firstName = undefined; 'undefined' is both a type and value
//let lastName = null; ----can be used to clear value of a variable
// let name = 'John'
// let age = 22
// try 'typeof' operator on above to check their types
// to make above cleaner make an object instead:

let person = {
    name: 'John', //String Literal
    age: 22 //Number Literal
};

//Dot Notation
person.name = 'John';

//Bracket Notation
//person['name'] = 'Mary'

console.log(person);

//console.log(person.name);

//Arrays are another object -- DATA STRUCTURE THAT LISTS A SET OF ITEMS
let selectedColors = ['red','blue'];
selectedColors[2] = 'green'; //length of array can be changed; it is dynamic; here i added one more element
selectedColors[3] = 12; //storing a different type in array 
console.log(selectedColors);
//console.log(selectedColors[0]); selecting a certain index to show a certain element(in this case red)
//typeof selectedColors
console.log(selectedColors.length) //tells you how long it is

//functions that perform a task
function greet() {
    console.log('Hello World (2)');
}
greet();

function hello(name) {
    console.log('Hello ' + name);
}
hello('Jeff');
hello('Jeff Brown');

function henlo(name, lastName) {
    console.log('Hello ' + name + ' ' + lastName)
}
henlo('jeff')
henlo('jeff','brown')

//functions that calculate values
function square(number) {
    return number * number;
}
console.log(square(5));
console.log(square(2) / 4 + 6)