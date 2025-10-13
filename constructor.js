// !Constructor Function
function Car(make,model,year){
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

const car1 = new Car('Toyota', 'Toyota', 1995);
console.log('🚀 ~ car1:', car1);

const car2 = new Car('BMW', 'Sclass7', 2025);
console.log('🚀 ~ car2:', car2);
