
// Inbuilt Looping Methods ===================

const nums = [1,2,3,4,5,6,7,8,9,10]

// MAP
nums.map((num) => num * 2) // [2,  4,  6,  8, 10,12, 14, 16, 18, 20]

// FILTER
nums.filter((num) => num % 2 == 0) // [ 2, 4, 6, 8, 10 ]

// REDUCE
nums.reduce((num,total) => num + total)  // 55

// SOME
nums.some((item) => item > 3) // true

// EVERY 
nums.every((item) => item <= 10) // true

// FIND
nums.find((item) => item > 3) // 4
// ---------------------------------------------------------------------------------------------------------------------------------------------------------

// SPRED AND REST Operators

const nums1 = [1,2,3,4,5]
const nums2 = [6,7,8,9,10]

//Spread Operator
const fullNums = [...nums1,...nums2] 
// console.log(fullNums); // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Rest Operator
function rest(...arr) {
    return arr
}
// console.log(rest(nums1,nums2)) // [ [ 1, 2, 3, 4, 5 ], [ 6, 7, 8, 9, 10 ] ]


// OTHER ARRAY METHODS

// Concat - joining two arrays togother
nums1.concat(nums2) // [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Slice - print start to end index
nums1.slice(1,3)
// console.log(slice) // [ 2, 3 ]

// Splice - String
const str = ['orange' , 'banana' , 'apple']
const splice = str.splice(1,2)
console.log(splice); // [ 2, 3, 4 ]