function binarySearch(array, target) {
    const left = 0
    const right = array.length - 1

    while (left <= right) {
        const mid = Math.floor((left + right) / 2)
        if (array[mid] === target) {
            return mid
        } else if (array[mid] < target) {
            mid = mid - 1
        } else {
            mid = mid + 1
        }
    }
    return mid

}

console.log(binarySearch([1, 3, 5, 7, 9, 11, 13, 15, 17,2],9));