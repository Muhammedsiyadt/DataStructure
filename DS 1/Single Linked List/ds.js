// function binarySearch(array, target, low = 0, high = array.length-1){
//     if(low > high){
//         return -1
//     }

//     const mid = Math.floor((low + high) / 2)

//     if(array[mid] === target){
//         return mid
//     }else if(array[mid] > target){
//         return binarySearch(array, target, mid+1, high)
//     }else{
//         return binarySearch(array, target, low, mid-1)
//     }
// }

// const array = [9,6,5,2,0,-1,-3]
// console.log(binarySearch(array,9));

// let arr = [5,3,7,5,3]
// let arr2 = [0,8,6,5,3]

// //  [7, 0, 8, 6]

// const full = [...arr,...arr2]
// const sort = full.sort((a,b) => a-b)
// console.log(sort);
// for (let i = 0; i < sort.length-1; i++) {
//     for (let j = i+1 ; j < sort.length; j++) {
//         if(sort[i] === sort[j]){
//             sort.splice(i,1)
//             sort.splice(j,1)
//             j--

//         }
//     }
// }
// console.log(sort);

// const result = array.flat(Infinity)
// console.log(result);
// let ar = [];
// function find(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (Array.isArray(array[i])) {
//       return find(array[i]);
//     } else {
//       ar.push(array[i])
//     }
//   }
// } 

// const array = [7, 6, [8, [5]]];
// console.log(find(array));
// console.log(ar);

// let arr = [5, 3, 7, 5, 3];
// let arr2 = [0, 8, 6, 5, 3];

// const maxFromArr = Math.max(...arr);
// const uniqueArr2 = [...new Set(arr2)];

// let uncommonarray1 = arr.filter(ele => !arr2.includes(ele)) 
// let uncommonarray2 = arr2.filter(ele=> !arr.includes(ele))

// uncommonElements = uncommonarray1.concat(uncommonarray2)

// console.log(uncommonElements);
//const result = [maxFromArr, ...uniqueArr2];
//console.log(result)

let arr = [5, 3, 7, 5, 3];
let arr2 = [0, 8, 6, 5, 3];
const full = [...arr, ...arr2];
let ar = [];

for (let i = 0; i < full.length; i++) {
  let a = 0;
  for (let j = 0; j < full.length; j++) {
    if (full[i] === full[j] && i != j) {
      a++;
    }
  }
  if (a == 0) {
    ar.push(full[i]);
  }
}

console.log(ar);
