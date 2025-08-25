/*Arithemtic operators*/ //done
let n1=3
let n2=4;

let mul = n1 * n2;
let dev = n1 / n2;
let sum1 = n1 + n2;
let sub = n1 - n2;
let expo = n1 ** n2;

console.log('~expo:',expo);
console.log('sum1:',sum1);
console.log('sub:',sub)
console.log('dev:',dev)
console.log('mul:',mul)

/*Asignments operators*/ //done
let name = 'Afan Shaikh';
let age = 26;
let married1 = false;
console.log('name:',typeof name);

/*Comparison operator*/
let num1 = 3;
console.log('~ num1:',typeof num1);
let num2 ="3";
console.log('~num2:', typeof num2);

console.log('checking value:', num1 !== num2);

/*Logical operator*/
/*

&& --> And
|| --> OR
! --> NOT
*/ 
let numb1 = 3;
let numb2 = 3;

let num4 = 3;
let num5 = 3;
console.log('~ or operator: (||)');
console.log(numb1 +1 ==numb2 && num4 == num5);
console.log(true && true);

console.log(numb1 == numb2 || num4 !== num5);
console.log(true || flase);

let flag = true;
console.log('flags:', !flag);

/* Bitwise operators*/
// covertion into number to binary and binary to number...
let number = 50;

let binaryConv = number.toString(2);
console.log('binaryConv:',binaryConv);

let bin_To_num = parseInt(binaryConv,2);
console.log('bin_To_num:',bin_To_num);

/*String Operator*/
/*
+ ==> concatination
+= ==> Append string
*/  
let namer = 'Afan';

let sur_name = 'Shaikh'

let full_name = namer +''+sur_name;

let married = false;

let answer = `${namer} ${sur_name} is not married ${married}`;
console.log('answer:',answer);

let names = 'Afan';

names += ' Shaikh';
console.log('~names:', names);

let name1 = 'Afan';
let name2 = ' Shaikh';

let full_names = name1+ ""+name2;

console.log('fullname:',full_name);

name1 +=''+name2;
console.log('name1:',name1);

/*Continal (Ternary) operator*/
let valCheck = 1 > 18 ? true : false;
console.log('valCheck:',valCheck );

/*Spread and Rest operators*/ 
let arr = [1,2,3,4];

let newArr = [...arr,5,6,7,8,];
console.log('newArr:',newArr);

let finalArr = [...arr,...newArr];
console.log("finalArr:",finalArr);

//here we have to use rest operators
function name3(...args){
    console.log(args);
}
name3(1,2,3)