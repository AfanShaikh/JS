// !Constructor Function
function Car(make, model, year) {
  this.make = make, 
  this.model = model, 
  this.year = year;
}

// ! Below is the code of class base constructor
// class Car{
//     constructor(make,model,year) {
//         (this.make = make),
//         (this.model = model),
//         (this.year = year);
//     }
// }

const car1 = new Car("Toyota", "Toyota", 1995);
console.log("🚀 ~ car1:", car1);

const car2 = new Car("BMW", "Sclass7", 2025);
console.log("🚀 ~ car2:", car2);

const person = {
  name: "Afan",
  myFunc: function () {
    console.log(this.name);
  },
};

person.myFunc();

function myName() {
  console.log(this);
}

myName();

//! so here we have to use call,apply,bind
// ! Call - so in call we execute the code this  manner

let Person1 = {
    name: 'Afan',
}

let Person2 = {
    name: 'Shabbir',
}

function myFunction(age,city){
    this.age = age;
    this.city = city;
}

myFunction.call(Person1 ,20 , 'Mumbai');
console.log(Person1);
myFunction.call(Person2 ,21 , 'Mumbai');
console.log(Person2);

// apply - so in apply we execute the code this manner.

let Person3 = {
  name: 'sejal',
};

let Person4 = {
  name: 'jignesh',
};

function myFunctions1(age, city) {
  this.age = age;
  this.city = city;
}

myFunctions1.apply(Person3, [24, 'pune']); //here we will give to arg as a '[]' to separate and send the value

console.log('-> Person3:', Person3);


// bind

// call - so in call we execute the code this manner.

let Person5 = {
  name: 'suresh',
};

let Person6 = {
  name: 'ramesh',
};

function myFunctions3(age, city) {
  this.age = age;
  this.city = city;
}

let myBind = myFunctions3.bind(Person5, 24, 'pune'); // here we have to catch the value coming form bind so we took to a variable.

myBind(); // we should call the function  whenever  we needed.
console.log(myBind);
console.log(Person5);