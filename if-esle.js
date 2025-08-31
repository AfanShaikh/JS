/*Check if a number is even or odd.*/ 
let num = 10;

if (num % 2 === 0) {
    console.log("Even"); 
} else {
    console.log("Odd");
}
/*Check if a number is positive, negative, or zero*/
let num1 = 8; 

if (num1 > 0) {
  console.log(num1 + " is Positive");
} else if (num1 < 0) {
  console.log(num1 + " is Negative");
} else {
  console.log("The number is Zero");
}
//Find the greater between two numbers
let number1 = 15;  
let number2 = 25; 

if (number1 > number2) {
    console.log(num1 + " is greater than " + num2);
}
else (number2 > number1)
{
   console.log(number2 + " is greater than " + number1);
}
//Check if a number is divisible by both 3 and 5.
let num2 = 7; 

if (num2 % 3 === 0 && num2 % 5 === 0) {
    console.log(num2 + " is divisible by both 3 and 5");
} else {
    console.log(num2 + " is NOT divisible by both 3 and 5");
}

