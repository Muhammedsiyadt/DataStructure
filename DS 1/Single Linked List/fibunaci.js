// const fib = function (n) {
//     const array = [0, 1]

//     for (let i = 2; i <= n; i++) {
//         array.push(array[i - 1] + array[i - 2])
//     }

//     console.log(array);
// }

// fib(5)

// function fibonacci(n){
//     let f1 = 0
//     let f2 = 1
//     let fn;
//     for (let i = 1; i <= n; i++) {
//         console.log(f1);
//         fn = f1 + f2
//         f1 = f2
//         f2 = fn
//     }
// }

// fibonacci(5)

const array = [0, 1];
for (i = 2; i <= 5; i++) {
  array.push(array[i - 1] + array[i - 2]);
}
console.log(array);

