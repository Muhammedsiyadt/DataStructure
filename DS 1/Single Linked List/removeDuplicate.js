
// With Js Method
// function removeDup(nums) {

// way 1
// const set = Array.from(new Set(nums))
// return set.length

// way 2
//     for (let i = 0; i < nums.length; i++) {
//         if (nums[i] == nums[i + 1]) {
//             nums.splice(i + 1, 1)
//             i--
//         }
//     }
//     return nums.length
// }

// Time compleity = O(n)
// Space compleity = O(1)

// const array = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
// console.log(removeDup(array)) 


// Without Js Methods

function removeDup(nums) {
    if (nums.length === 0) return 0
    let i = 0
    for (let j = 1; j < nums.length; j++) {
        if (nums[i] != nums[j]) {
            i++
            nums[i] = nums[j]
        }
    }
    return i + 1
}

const array = [0, 0, 1, 1, 1, 2, 2, 3, 3, 4]
console.log(removeDup(array))