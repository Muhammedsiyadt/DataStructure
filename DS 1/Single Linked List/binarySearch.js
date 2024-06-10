
// function binarySearch(array, target) {
//     let left = 0;
//     let right = array.length - 1;

//     while (left <= right) {
//         const mid = Math.floor((left + right) / 2);
//         if (array[mid] === target) {
//             return mid;
//         } else if (array[mid] < target) {
//             left = mid + 1;
//         } else {
//             right = mid - 1;
//         } 
//     }
//     return -1;
// } 

// console.log(binarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17, 2 , 5], 121));


function binarySearch(arr, target, low = 0, high = arr.length - 1) {
    if (low > high) {
        return -1;
    }
    
    const mid = Math.floor((low + high) / 2);
    
    if (arr[mid] === target) {
        return mid;
    } else if (arr[mid] < target) {
        return binarySearch(arr, target, mid + 1, high);
    } else {
        return binarySearch(arr, target, low, mid - 1); 
    }
} 

console.log(binarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17, 2 , 5],15)); 

