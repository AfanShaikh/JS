//!Array
//! Push



let arr = [1,2,3,4,5];

arr.push(6,7,8);

arr;
Array.prototype.pushs = function(value){
    let index = this.length;
    console.log('🚀 ~ index:', index);
    this[index] = value;
}

arr.pushs(9);
arr;

//!Pop


let arr1 = [1,2,3,4,5,6];

let ans = arr1.pop();
console.log('🚀 ~ ans:', ans);
arr1.pop();
console.log('🚀 ~ arr1:', arr1);

Array.prototype.pops = function(){
    let index = this.length -1;
    delete this[index];
    this.length = index;
}
arr1.pops();
console.log('🚀 ~ arr:', arr);
console.log('🚀 ~ arr:', arr);
