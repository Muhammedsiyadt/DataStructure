// function findPrime(num) {
//     if(num < 2) return `${num} is not prime`

//     for (let i = 2; i < num; i++) {
//         if(num % i === 0){
//             return `${num} is not prime`
//         }
//     }

//     return `${num} number is prime`
// }

// console.log(findPrime(5));

// function isPrime(num) {
//     if (num <= 1) {
//         return false;
//     }
//     for (let i = 2; i <= Math.sqrt(num); i++) {
//         if (num % i === 0) {
//             return false;
//         }
//     }
//     return true;
// }

// function sumOfPrimes(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (isPrime(arr[i])) {
//             sum += arr[i];
//         }
//     }
//     return sum;
// }

// const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13];
// const sum = sumOfPrimes(array);
// console.log("Sum of prime numbers:", sum);


// find sum of the prime numbers in array
function prime(value) {
  if (value <= 1) {
    return false;
  }
  for (let i = 2; i <= Math.floor(value / 2); i++) {
    if (value % i === 0) {
      return false;
    }
  }

  return true; 
}

// find sum with for loop
const array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 13];
var sum = 0;
for (let i = 0; i < array.length; i++) {
  if (prime(array[i])) {  
    sum += array[i];
  }
}
console.log(sum);

// find sum with reduce
// const sumOfPrime = array.reduce((sum,num) => {
//     if(prime(num)){
//         return sum + num
//     }else{
//         return sum
//     }
// },0) 
// console.log(sumOfPrime);
// console.log(sumOfPrime/array.length);

// const string = 'siyad,sinan,sabith'
// console.log(string.substring(6)); 
