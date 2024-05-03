

function findUnique(nums1,nums2){
    const full = [...nums1,...nums2]
    const unique = Array.from(new Set(full))
    return unique
}

const nums1 = [1, 3, 2, 3, 4, 1]
const nums2 = [5, 3, 6, 7, 1, 5, 8, 9, 7]
console.log(findUnique(nums1,nums2));