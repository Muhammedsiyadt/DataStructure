
// function bubbleSort(array){
//     for(let i = 0 ; i < array.length ; i++){
//         for(let j = i+1 ; j< array.length ; j++){
//             if(array[i] > array[j]){
//                 let temp = array[i] 
//                 array[i] = array[j] 
//                 array[j] = temp
//             }
//         }
//     }
//     return array
// }

// const array = [6, 4, 1, 5, 3, 2]
// console.log(bubbleSort(array));


// function insertionSort(array){
//     for (let i = 1; i < array.length; i++) {
//         let current = array[i]
//         let j = i - 1
//         while(j >= 0 && array[j] > current){
//             array[j + 1] = array[j]
//             j--
//         }
//         array[j + 1] = current
//     }
//     return array
// } 
// const array = [6, 4, 1, 5, 3, 2]
// console.log(insertionSort(array)); 


// function selectionSort(array){
//     for (let i = 0; i < array.length; i++) {
//         let min = i
//         for (let j = i+1; j < array.length; j++) {
//             if(array[min] > array[j]){
//                 min = j
//             }
//         }
//         [array[i] , array[min]] = [array[min] , array[i]]
//     }
//     return array
// }

// const array = [6, 4, 1, 5, 3, 2]
// console.log(selectionSort(array)); 


// function mergeSort(array) {
//     if(array.length < 2){
//         return array
//     }

//     const mid = Math.floor(array.length / 2)
//     const leftArray = array.slice(0 , mid)
//     const rightArray = array.slice(mid)

//     return merge(mergeSort(leftArray) , mergeSort(rightArray)) 
// }

// function merge(leftArray , rightArray){
//     const sortedArray = []
//     while(leftArray.length && rightArray.length){
//         if(leftArray[0] <= rightArray[0]){
//             sortedArray.push(leftArray.shift())   
//         }else{
//             sortedArray.push(rightArray.shift())
//         }
//     }
//     return [...sortedArray, ...leftArray, ...rightArray] 
// }

// const array = [6, 4, 1, 5, 3, 2]
// console.log(mergeSort(array)); 


function quickSort(array) {
    if(array.length < 2){
        return array
    }

    let pivot = array[Math.floor(array.length / 2)]
    let left = []
    let right = []
    let middle = []

    for (let i = 0; i < array.length; i++) {
        if(array[i] < pivot){
            left.push(array[i])
        }else if(array[i] > pivot){
            right.push(array[i])
        }else{
            middle.push(array[i])
        }
    }

    return [...quickSort(left), ...middle, ...quickSort(right)]
}
const array = [6, 4, 1, 5, 3, 2]
console.log(quickSort(array)); 