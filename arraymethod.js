let array = [1,2,3,4,5,6];
let index = null;

//! without in-build approach
for(let i=0;i<array.length;i++){
    if(array[i] === 5) index+=i;
}
console.log(index);

//! in-build approach

let dataIndex = array.indexOf(5);
console.log('~dataIndex:', dataIndex);

let newIndex = array.findIndex((el)=>el ===5);
console.log('~newIndex:', newIndex);


// ! push or pop
let array1 = [1,2,3,4,5,6];
console.log('~array1:',array1);
array1.pop();
array1.push(7);
console.log('~array1:',array1);

//! shift & unshift
array1.shift();
console.log('~array1:',array1);

array1.unshift(1);
console.log('~array1:',array1);

//!Flat
myArr = [[1,2],[3,4],[5,6]];
console.log('~myArr:',myArr);
newArr = myArr.flat();
console.log('~newArr:',newArr);

//!Delete
arr3 =[1,2,3,4,5];
console.log('~arr3:',arr3);
delete arr3[4];
console.log('~arr3:',arr3);

//!Splice & Slice
array1.splice(3,2);
console.log('~array1:', array1);

let newarr = array1.slice(0,2);
console.log('~newarr:', newarr );

