function anualDay(){
    console.log("Hello Function's");
    return 'Afan'
}
let ans = anualDay();
console.log('~ans:',ans);

let num_1 = 10;
let num_2 = 20;

function greatest(a,b){
    if(a>b){
        return `this is the greater then b and the value of a is ${a}`;
    }
    else{
         return `this is the greater then a and the value of b is ${b}`;
    }
}

let ans1 = greatest(num_1,num_2);
console.log('~ans1:',ans1);

let num_3 = undefined;
let num_4 = 5;

function greatest(a=40,b=60){
    if(a>b){
        return `this is the greater then b and the value of a is ${a}`;
    }
    else{
         return `this is the greater then a and the value of b is ${b}`;
    }
}
let ans2 = greatest(num_3,num_4);
console.log('~ans2:',ans2);

let num_5 = undefined;
let num_6 = 5;

const greatest=(a=40,b=60)=>{
    if(a>b){
        return `this is the greater then b and the value of a is ${a}`;
    }
    else{
    return `this is the greater then a and the value of b is ${b}`;
    }
}
let ans3 = greatest(num_5,num_6);
console.log('~ans3:',ans3);



                        /* TASK */
//! Write a function that takes two numbers as input and returns their sum.
// let num1 = 6;
// let num2 = 6;

// function addNum(num1,num2){
//     return num1 + num2;
// }

// console.log('~addNum:', num1+num2);
function addNumbers(num1, num2) {
    return num1 + num2;
}

let ans4= addNumbers(5, 7);
console.log("The sum is: " + ans);

//!Create a function that checks if a number is even or odd.
let num = 8;   

function checkEvenOdd() {
    if (num % 2 === 0) {
        console.log(num + " is Even");
    } else {
        console.log(num + " is Odd");
    }
}
checkEvenOdd();

//!Write a function that converts Celsius to Fahrenheit.
let celsius = 30;  

function convertToFahrenheit() {
    let fahrenheit = (celsius * 9/5) + 32;
    console.log(celsius + "°C is equal to " + fahrenheit + "°F");
}

convertToFahrenheit();

//!Write a function that returns the square of a number.
let num2 = 5; 

function findSquare() {
    let square = num2 * num2;
    console.log("The square of " + num2 + " is " + square);
    return
}

findSquare();

//!Create a function that takes a string and returns its length.
let text = "Sybau"; 

function getStringLength() {
    let length = text.length;
    console.log("The length of " + text + " is " + length);
}

getStringLength();

//!Write a function to find the maximum of two numbers.
let num3 = 25;   
let num4 = 40;  

function findMaximum() {
    if (num3 > num4) {
        console.log("The maximum number is: " + num3);
    } else {
        console.log("The maximum number is: " + num4);
    }
}

findMaximum();

//!Write a function that prints your name 5 times.
let name = "Yuki";  

function printName() {
    for (let i = 1; i <= 5; i++) {
        console.log(name);
    }
}

printName();

//!Write a function to calculate the area of a circle given its radius.
let radius = 7;

function calculateArea() {
    let area = Math.PI * radius * radius;
    return area;
}

let ans5 = calculateArea();
console.log("The area of the circle is: " + ans5);

//!Write a function that takes an array and returns the first element.
let numbers = [10, 20, 30, 40, 50];

function getFirstElement() {
    return numbers[0];
}

let result = getFirstElement();
console.log("The first element is: " + result);

//!Write a function that reverses a string.
let text1 = "reggiN";

function reverseString() {
    return text1.split("").reverse().join("");
}

let ans6 = reverseString();
console.log('🚀 ~ ans6:', ans6);

//!Write a function that finds the factorial of a number.
let num5 = 5;

function findFactorial() {
    let factorial = 1;
    for (let i = 1; i <= num5; i++) {
        factorial *= i;
    }
    return factorial;
}

let ans7 = findFactorial();
console.log('🚀 ~ ans7:', ans7);

//!Write a function to count the number of vowels in a string.
let str = "Shaikh Afan";

function countVowels() {
    let vowels = "aeiouAEIOU";
    let count = 0;

    for (let i = 0; i <str.length; i++) {
        if (vowels.includes(str[i])) {
            count++;
        }
    }
    return count;
}

let ans8 = countVowels();
 console.log('🚀 ~ ans8:', ans8);
 
//!Write a function that takes an array and returns the largest number.
let arr = [10, 45, 7, 89, 23];

function findLargest() {
    let largest = arr[0];

    for (let i = 1; i <arr.length; i++) {
        if (arr[i] > largest) {
            largest = arr[i];
        }
    }
    return largest;
}

let ans9 = findLargest();
console.log('🚀 ~ ans9:', ans9);

//!Write a function that removes duplicates from an array.
let arr2 = [10, 20, 10, 30, 20, 40, 30];

function removeDuplicates() {
    let newArr = [...new Set(arr2)];
    return newArr;
}

let anss = removeDuplicates();
console.log('🚀 ~ anss:', anss);