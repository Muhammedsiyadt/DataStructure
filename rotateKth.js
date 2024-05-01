function rotate(nums, k) {
    let size = nums.length

    if (size > k) {
        k = k % size
    }

    const rotate = nums.splice(size - k, size)
    nums.unshift(...rotate)

    return nums
}

console.log(rotate([1, 2, 3, 4, 5, 6, 7],3)); 



