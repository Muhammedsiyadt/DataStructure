// function bubbleSort(Array){
//     for (let i = 0; i < array.length; i++) {
//         for (let j = i + 1; j < array.length; j++) {
//             if(array[i] > array[j]){
//                 let temp = array[i]
//                 array[i] = array[j]
//                 array[j] = temp
//             }
//         }
//     }
//     return array
// }

// const array = [6, 9, 2, 5, 6, 8, 6, 4]
// console.log(bubbleSort(array)); 


// function insertionSort(array) {
//     for (let i = 1; i < array.length; i++) {
//         let current = array[i]
//         let j = i - 1
//         while(j >= 0 && array[j] > current){
//             array[j + 1] = array[j]
//             j--
//         }
//         array[j+1] = current
//     }
//     return array
// }

// const array = [6, 9, 2, 5, 6, 8, 6, 4]
// console.log(insertionSort(array)); 


// function selectionSort(array){
//     for (let i = 0; i < array.length; i++) {
//         let min = i
//         for (let j = i+1; j < array.length; j++) {
//             if(array[j] < array[min]){
//                 min = j
//             }
//         }
//         [array[i], array[min]] = [array[min], array[i]]
//     }
//     return array
// }

// const array = [6, 9, 2, 5, 6, 8, 6, 4]
// console.log(selectionSort(array)); 



// function quickSort(array){
//     if(array.length <= 1){
//         return array
//     }
//     let pivot = array[Math.floor(array.length / 2)]
//     let left = []
//     let right = []
//     let mid = []

//     for (let i = 0; i < array.length; i++) {
//         if(array[i] < pivot){
//             left.push(array[i])
//         }else if (array[i] > pivot){
//             right.push(array[i])
//         }else{
//             mid.push(array[i])
//         }
//     }
//     return [...quickSort(left) , ...mid , ...quickSort(right)]
// }

// const array = [6, 9, 2, 5, 6, 8, 6, 4]
// console.log(quickSort(array)); 



// function mergeSort(array) {
//     if(array.length <= 1){
//         return array
//     }
//     let mid = Math.floor(array.length / 2)
//     let Laarray = array.slice(0,mid)
//     let Rarray = array.slice(mid)
//     return merge(mergeSort(Laarray) , mergeSort(Rarray))
// }

// function merge(Larray , Rarray){
//     const Sarray = []

//     while(Larray.length && Rarray.length){
//         if(Larray[0] <= Rarray[0]){
//             Sarray.push(Larray.shift())
//         }else{
//             Sarray.push(Rarray.shift()) 
//         }
//     }

//     return [...Sarray, ...Larray, ...Rarray]
    
// }

// const array = [6, 9, 2, 5, 6, 8, 6, 4]
// console.log(mergeSort(array));  


