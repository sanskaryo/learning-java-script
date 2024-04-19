

class ToyotaCar {

    constructor(brand) {

        console.log("constructing the object")
    }
    start() {
        console.log("start");
    }

    stop() {
        console.log("stopped")
  
  
    }

    setBrand(brand)  {
        this.brand = brand;
    }
}



let fortuner = new ToyotaCar();
let lexus = new ToyotaCar();
fortuner.setBrand("fortuner");
let mirai = new ToyotaCar("nexa");

lexus.brand = "brand";
mirai.setBrand("mirai")





























// const student = {
//     fullName: 'sanskar khandelwal',
//     marks: 94.4,
//     printMarks: function() {
//         console.log("marks =", this.marks);
//     },
// };

// const employee = {
//     calcTax() {
//         console.log("The tax rate is flat 18%");
//     },
// };

// const Ranga = {
//     salary: 50000,
// };

// const Billa = {
//     salary: 55000,
// };

// Object.setPrototypeOf(Ranga, employee);
// Object.setPrototypeOf(Billa, employee);

// // Now Ranga and Billa will inherit the calcTax method


