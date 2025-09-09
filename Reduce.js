//! Reduce

//Array
let arr = [1,2,3,4,5,6,7,8,9,10];

let val = arr.reduce((acc,cur)=>{
    return acc += cur
},0);
console.log('~val:', val);

const items = [
    { name: 'Book' , price: 300},
    { name: 'Pen' , price: 50},
    { name: 'NoteBook', price: 150},
];

const createSumReduce = (prop) => {
    return (acc,obj) => acc + obj[prop];
};

const totalPrice = items.reduce(createSumReduce('price'),0);

console.log(totalPrice);


//Object
const fruits = ['Apple','Banana','Apple','Mango','Banana','Apple'];

const countFruits = fruits.reduce((acc,fruit) => {
    acc[fruit] = (acc[fruit] || 0) + 1;
    return acc;
}, {});
console.log(countFruits);


//String
let str = 'Afan';

let funcStr = str.split('');
console.log('->funcStr:', funcStr);

const countString = funcStr.reduce((acc,string) => {
    acc[string] = (acc[string] || 0) +1;
    return acc;
},{});

console.log('~countString:', countString);