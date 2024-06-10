// Finding sum of multiple of elaments

// function factorial(num) {
//     if (num === 0) {
//         return 1
//     } else {
//         return num * factorial(num - 1)
//     }
// }

// console.log(factorial(5));

// function fact(n) {
//     let mult = 1
//     for (let i = 1; i <= n; i++) {
//         mult = mult * i
//     }
//     return mult
// }

// console.log(fact(5));

const number = 5;
var sum = 1;

for (let i = 1; i <= number; i++) {
  sum = sum * i;
} 
console.log(sum); 
