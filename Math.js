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
