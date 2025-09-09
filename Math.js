//!Math Method
let num = 25;

let ans = Math.pow(num,3); //cubic value

console.log('~ans:', ans);

let num2 = Math.sqrt(num);
console.log('~num2:', num2);

let num3 = 25;
console.log('without inbuild', num3 ** (1/2));


//ceil
let num4 = 7.6;
console.log('~num4:', Math.ceil(num4));

//floor
let num5 = 7.6;
console.log('~num5:', Math.floor(num5));


let num6 = 125;
console.log(Math.ceil(Math.pow(num6, 1/3)));
console.log(Math.floor(Math.pow(num6, 1/3)));

//fround
let num7 = 3.33;
console.log('~num7:', Math.fround(num7))

//Random 
let num8 = 6.5;
console.log('~num8:', Math.round(num8))

function randomNumber(x){
    console.log('~ randomNumber:', Math.round(Math.random()* x));
}
randomNumber(num8);

// Log value
let num9 = 16;
let num10 = 1;

console.log(Math.log(num9)/Math.log(num10));
console.log(Math.log2(num9));