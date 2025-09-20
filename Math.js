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



/* TASK */
//!Find the ceiling value of 4.2?
let num11 = 4.2;
console.log('~num11:', Math.ceil(num11));

//!Find the Floor Value of 9.99?
let num12 = 9.99;
console.log('~num12:', Math.floor(num12));

//!Round 5.6789 to 2 decimal places?
let num_1 = 5.6789;
let rounded = Math.round(num_1* 100) / 100;
console.log(rounded);

//!Generate a random number between 1 and 10?
function getRandomNumber() {
    return Math.floor(Math.random() * 10) + 1;
}

let randomNum = getRandomNumber();
console.log('🚀 ~ randomNum:', randomNum);

//!Find the maximum value among 25,78.13,56?
let maxValue = Math.max(25, 78.13, 56);
console.log('🚀 ~ maxValue:', maxValue);

//!Find the minimum value among -12,-5,0,8,3?
let minValue = Math.min(-12, -5, 0, 8, 3);
console.log('🚀 ~ minValue:', minValue);

//!Calculate 2 raised to the power of 8?
let Cal = Math.pow(2, 8);
console.log('🚀 ~ Cal:', Cal);

//!Find the square root of 121?
let num_2 = 121;
let sroot = Math.sqrt(num_2);
console.log('🚀 ~ sroot:', sroot);

//!Get the absolute value of -150?
let num_3 = -150;
let absoluteValue = Math.abs(num_3);
console.log('🚀 ~ absoluteValue:', absoluteValue);

//!Find the cube root of 64?
let num_4 = 64;
let cRoot = Math.cbrt(num_4);
console.log('🚀 ~ cRoot:', cRoot);

//!Generate a random decimal number between 0 and 1?
let randomDecimal = Math.random();
console.log('🚀 ~ randomDecimal:', randomDecimal);

//!Find the value of π up to 4 decimal places?
let piValue = Math.PI.toFixed(4);
console.log('🚀 ~ piValue:', piValue);

//!Convert 30 degrees to radians?
let degrees = 30;
let radians = degrees * (Math.PI / 180);
console.log('🚀 ~ radians:', radians);

//!Round 7.555 to the nearest whole number?
