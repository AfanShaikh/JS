//! immutable - [primitive] call by value
/*
number
string
boolean
*/ 
let name = 'Afan'; //a

let first = name[0]; //b
console.log(first);

first = 'S';

console.log(first);

name[0] = 'S';

console.log(name[0]);
console.log(name);

console.log(name[0]);
console.log(name[1]);
console.log(name[2]);
console.log(name[3]);