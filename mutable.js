//! mutable [call by reference] [non-primitive]
/*
Object
Array 
Function
*/
let arr = [1,2,3,4,5];
let newData = arr[0];

arr[0] = 6

console.log(newData);

console.log(`~arr:`, arr);


let object = {
    name : 'Afan'
}

object.name = "khan"

console.log(object);

for (var i=1;i<=2;i++){
    console.log(i);
}
console.log(i);
