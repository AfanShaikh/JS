// ! object [key value pair]

let object = {
    name: 'Afan Shaikh',
    age: 20,
    married: 'single',
    hobbies: ['Cricket','Reading Comic'],
    myFunc:function(){
        return this.name;
    }
}

let nnn = object.myFunc();
console.log(nnn);

console.log(object.name);
console.log(object.age);
console.log(object.married);

for(let key in object){
    console.log(`${key} : &{object[key]}`);
}
