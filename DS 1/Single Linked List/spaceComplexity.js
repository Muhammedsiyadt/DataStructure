

// this case returns one single variable as sum
// O(1) space complexity
const sample = (array) => {
    let sum = 0
    for (i = 0; i < array.length; i++) {
        sum += array[i]
    }
    return sum
}

const arr = [1,2,3,4,5]
console.log(sample(arr))



// here when changing the input then changing and increasing and decreading the space.here has dynamic size for array
// O(n) Space complexity
const sample2 = (n) => {
    const array = []
    for(i=0;i<n;i++){
        array.push(i*5)
    }
    return array
}

console.log(sample2(5));
