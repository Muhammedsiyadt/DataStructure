// function rotate(nums, k) {
//     let size = nums.length

//     if (size > k) {
//         k = k % size
//     }

//     const rotate = nums.splice(size - k, size)
//     nums.unshift(...rotate)

//     return nums
// }

// console.log(rotate([1, 2, 3, 4, 5, 6, 7],3)); 

function rotate(nums, k) {
    let size = nums.length

    if (size > k) {
        k = k % size
    }

    reverse(nums, 0, nums.length - 1)
    reverse(nums, 0, k - 1)
    reverse(nums, k, nums.length - 1)

    return nums

}
function reverse(nums, l, r) {
    while (l < r) {
        const temp = nums[l]
        nums[l++] = nums[r]
        nums[r--] = temp
    }
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7], 3));




