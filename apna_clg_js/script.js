

// const a = 5;
// const b = 5;


// const asum = (a,b) => {
//     console.log(a+b);

// };

// const Multi = (a,b)  => {
//     a*b
// }


function countVowels(str) {

     let count = 0;
 for (const char of str) {
    if(char === "a" || char === "e" || char === "i" || char === "o" || char === "u" ) {
        count ++;
    }
    
 }    

 return count;

}


let arr = [1,2,3,4,5];

arr.forEach((val)  =>{

    console.log(val) ;
})
