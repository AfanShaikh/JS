// !Polymorphism - basically one common function have every class with different value

class Vehicle {
  run() {
    console.log("Vehicle is running");
  }
}

class Car {
  run() {
    console.log("Car is running");
  }
}

class Truck {
  run() {
    console.log("Truck is running");
  }
}

const v1 = new Vehicle();
const v2 = new Car();
const v3 = new Truck();

v1.run();
v2.run();
v3.run();

// this is different example of polymorphism

class Animal {
  speak() {
    console.log("Animal speaks");
  }
}

class Dog extends Animal {
  speak() {
    console.log("Dog barks");
  }
}

class Cat extends Animal {
  speak() {
    console.log("Cat meows");
  }
}

function makeSound(animal) {
  animal.speak();
}

let dog = new Dog();
let cat = new Cat();

makeSound(dog);
makeSound(cat);

const printer = {
  print: () => console.log("Default print"),
};

const pdfPrinter = {
  print: () => console.log("Printing PDF"),
};

const htmlPrinter = {
  print: () => console.log("Printing HTML"),
};

function startPrint(printerObj) {
  printerObj.print();
}

startPrint(pdfPrinter); // Printing PDF
startPrint(htmlPrinter); // Printing HTML
