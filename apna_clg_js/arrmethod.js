// arr.map(callbackFnx(value,index,array))

// let nums = [24,54,67];

// let newArr = nums.map((val) => {
//     return val * 2;
// });

// console.log(newArr)

// let calcSquare = (num) => {
//     console.log(num * num);
// }


let array1 = [1,2,3,4];

// const initialValue = 0;
// const sumWithInitial = array1.reduce(

const output = array1.reduce((prev, curr) => {
    return prev + curr;
});

console.log(output)



arr = [22,34,94,94,96,86];

let topper = arr.filter((val) => {
    return val > 90;
});

console.log(topper);